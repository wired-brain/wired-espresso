<p align="center">
  <em>ℹ This is an example repository designed for the Contributing to an Open Source Project on GitHub course on Pluralsight</em>
</p>

# Wired Espresso

☕ An open source JS framework for popular espresso machines, from Wired Brain.

## Getting Started

Check out our [user documentation](README.md) for tutorials and guides on installing Wired Espresso for your machine. You can find the latest releases on our [Releases](releases) page.

If you have questions, join our [Slack](README.md) channel and we'll be happy to help!

## Contributing

We ❤ contributors, see our [Contributing Guide](CONTRIBUTING.md) for how to get started submitting contributions or getting involved.

## Known Issues

- **LUCCA M58 v2**
  - This model has a known issue where the requested temperature input from the user is higher (by 1 degree) when it is reported to the firmware. Our code will subtract the extra amount to maintain the correct requested temperature. e.g. Entering `205` on the digital display will send `206` to the software and we will normalize it back to `205`.

## License

This project is licensed under [the Apache 2.0 license](LICENSE).

Copyright 2019 Kamran Ayub
