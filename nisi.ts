function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

// Usage
console.log(greet("Alice")); // Output: Hello, Alice
console.log(greet("Bob", "Hi")); // Output: Hi, Bob
