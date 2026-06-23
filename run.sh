#!/bin/bash
echo "=== ADA Lab Programs (VTU BCSL40A) ==="
echo ""
echo "All 12 C programs are ready to compile and run."
echo ""
echo "To compile and run any program:"
echo "  gcc 'ADA Programs/<program>.c' -o output -lm && ./output"
echo ""
echo "Available programs:"
ls "ADA Programs/"*.c | sed 's|ADA Programs/||'
