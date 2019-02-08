# tap-spec-report-bug
Demo of tap-spec collapsing with a failing testdouble test. Clone it and `npm install` for the dependencies.

`npm test` runs an unvarnished tape test suite of two failing and three passing tests.
`npm run with-faucet` shows that faucet successfully processes the output.
`npm run with-tap-spec` shows that the test suite actually crashes when we pipe to tap-spec; this is caused by the penultimate test,
named 'This will fail horribly'.
