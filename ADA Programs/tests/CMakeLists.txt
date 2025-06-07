cmake_minimum_required(VERSION 3.10)
project(KruskalTests)

set(GTEST_DIR "/path/to/googletest") 
include_directories(${GTEST_DIR}/include)

file(GLOB SOURCES "*.cpp")
add_executable(kruskal_test ${SOURCES})

find_library(GTEST_LIB gtest HINTS ${GTEST_DIR}/lib)
find_library(GTEST_MAIN_LIB gtest_main HINTS ${GTEST_DIR}/lib)

target_link_libraries(kruskal_test ${GTEST_LIB} ${GTEST_MAIN_LIB} pthread)