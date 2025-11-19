import { execve } from 'node:process';

const args = ['echo', 'hello'];
execve?.('/bin/echo', args);
