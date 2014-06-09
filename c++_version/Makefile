CC=/Users/mmocny/dev/ext/llvm_build/Release/bin/clang++
INCLUDES=/Users/mmocny/dev/ext/libcxx/include
LIBS=/Users/mmocny/dev/ext/libcxx/lib
CCFLAGS=-stdlib=libc++ -nostdinc++ -std=c++1y

BUILD_TYPE=-Ofast

SOURCES=$(wildcard *.cc)
TARGET=main



.PHONY: all build run clean

all: clean build

build:
	${CC} -I ${INCLUDES} -L ${LIBS} ${CCFLAGS} ${BUILD_TYPE} ${SOURCES} -o ${TARGET}

run:
	./main

clean:
	rm -rf ./main
