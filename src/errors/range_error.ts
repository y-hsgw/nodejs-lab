import net from 'node:net';

net.connect(-1);
// Throws "RangeError: "port" option should be >= 0 and < 65536: -1"
