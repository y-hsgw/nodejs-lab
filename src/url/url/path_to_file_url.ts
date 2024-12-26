import { pathToFileURL } from 'node:url';

const url1 = new URL('/foo#1', 'file:');
console.log(url1); // Incorrect: file:///foo#1
console.log(pathToFileURL('/foo#1')); // Correct:   file:///foo%231 (POSIX)

const url2 = new URL('/some/path%.c', 'file:');
console.log(url2); // Incorrect: file:///some/path%.c
console.log(pathToFileURL('/some/path%.c')); // Correct:   file:///some/path%25.c (POSIX)
