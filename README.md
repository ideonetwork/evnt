# Evnt

[![Inline docs](http://inch-ci.org/github/ideonetwork/evnt.svg?branch=master)](http://inch-ci.org/github/ideonetwork/evnt)

CQRS and Event Driven Development architecture for Ruby projects.

Evnt is a Ruby gem used to design software following the CQRS and Event driven development pattern. The idea behind Evnt is to develop the business logic of the system using three different classes:

- **Commands**: actions executed by actors that can be completed or stopped by the system.
- **Events**: something that it's already happen and should be logged somewhere.
- **Handlers**: event listeners that perform specific tasks.

The full documentation of these classes can be found here: <a href="https://github.com/ideonetwork/evnt/wiki">https://github.com/ideonetwork/evnt/wiki</a>

## Installation

To use the gem you need to add it on your Gemfile

Latest version
```ruby
gem 'evnt', git: 'https://github.com/ideonetwork/evnt'
```

Legacy version
```ruby
gem 'evnt'
```

## Development

### RDoc documentation

To update the rdoc documentation run:

```console
rdoc --op rdoc
```
