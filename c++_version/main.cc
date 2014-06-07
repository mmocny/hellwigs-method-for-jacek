#include <vector>
#include <iostream>
#include <iterator>
#include <type_traits>
#include <cmath>
#include <random>
#include <tuple>

auto combinationsStream = [](auto const& arr, auto size, auto const& emit) {
  std::decay_t<decltype(arr)> combination;
  if (size > arr.size()) return;

  std::function<void(decltype(size),decltype(size))> inner = [&](auto start, auto size) {
    if (size == 0) {
      emit(combination);
    } else {
      for (auto i = start; i <= (arr.size() - size); ++i) {
        combination.push_back(arr[i]);
        inner(i + 1, size - 1);
        combination.pop_back();
      }
    }
  };
  inner(0, size);
};

void testCombinations() {
  auto input = std::vector<int>{1,2,3,4};

  for (int i = 0; i < 6; i++) {
    combinationsStream(input, i, [](auto const& x) {
        std::cout << '[';
        std::copy(x.begin(), x.end(), std::ostream_iterator<int>(std::cout, ","));
        std::cout << ']';
    });
    std::cout << std::endl;
  }
}

auto hellwigsMethod = [](auto const& correlation, auto const& variables, auto const& correlation_y, auto const& emit) {
  auto hellwigsValueFor = [&](auto const& combination) {
    auto poj_wspolna = 0.0;
    for (int d = 0; d < combination.size(); ++d) {
      auto mianownik = 0.0;
      for (int i = 0; i < combination.size(); ++i) {
        // TODO: are all these `-1`s just because the data set is in the wrong range?  should they all be 0-1 range instead of 1-2?
        mianownik += std::abs(correlation[combination[d]-1][combination[i]-1]);
      }
      poj_wspolna += std::pow(correlation_y[combination[d]-1], 2.0) / mianownik;
    }
    return poj_wspolna;
  };

  // Iterate all possible combinations of `variables`, for each combination set size k
  for (int k = 1; k <= variables.size(); ++k) {
    combinationsStream(variables, k, [&](auto const& combination) {
      emit(hellwigsValueFor(combination));
    });
  }
};

void testHellwigs() {
  auto corr = std::vector<std::vector<double>>{
      {1,1.2,1.3},
      {1.2,1,2.3},
      {1.3,2.3,1},
    };
  auto v = std::vector<int>{1,2,3};
  auto corr_y = std::vector<int>{10,12,14};

  auto ans = std::vector<double>{};
  hellwigsMethod(corr, v, corr_y, [&](auto const& value) {
    ans.push_back(value);
  });

  std::cout << '[';
  std::copy(ans.begin(), ans.end(), std::ostream_iterator<double>(std::cout, ","));
  std::cout << ']' << std::endl;;
  //assert.deepEqual(ans, [100,144,196,110.9090909090909,128.69565217391306,103.03030303030303,103.18012422360249]);
}

auto getRandomArbitrary = [](auto min, auto max) {
  std::random_device rd;
  std::mt19937 mt(rd());
  std::uniform_real_distribution<double> dist(min, max);
  return dist(mt);
};

auto generateDummyInput = [](auto n) {
  auto corr = std::vector<std::vector<double>>{};
  auto v = std::vector<int>{};
  auto corr_y = std::vector<int>{};

  for (auto i = 0; i < n; i++) {
    v.push_back(i+1);
  }

  corr.resize(v.size());
  for (auto& row : corr) {
    row.resize(v.size());
    for (auto& cell : row) {
      cell = getRandomArbitrary(1.0,2.0);
    }
  }

  std::transform(v.begin(), v.end(), std::back_inserter(corr_y), [](auto const& a) { return 10 + a; });

  return std::make_tuple(corr, v, corr_y);
};

void testGenerateDummyInput() {
  auto d = generateDummyInput(10);
  auto corr = std::get<0>(d);
  auto v = std::get<1>(d);
  auto corr_y = std::get<2>(d);

  std::cout << corr.size() << std::endl;
  std::cout << corr[0].size() << std::endl;
  std::cout << v.size() << std::endl;
  std::cout << corr_y.size() << std::endl;
}

auto benchmark = [](auto const& label, auto const& f) {
  f();
  std::cout << label << " took TODO" << std::endl;
};


void runBenchmark() {
  for (auto n = 10; n <= 26; n++) {
    using namespace std::string_literals;
    benchmark("hellwigs for n = "s + std::to_string(n), [&]{
      auto d = generateDummyInput(n);
      auto corr = std::get<0>(d);
      auto v = std::get<1>(d);
      auto corr_y = std::get<2>(d);
      hellwigsMethod(corr, v, corr_y, [](auto const&){});
      std::cout << "Done " << n << std::endl;
    });
  }
}

int main() {
  //testCombinations();
  //testHellwigs();
  //testGenerateDummyInput();
  runBenchmark();
}
