class DataRetriever<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  public getData(): T {
    return this.data;
  }
}

// Usage
const dataRetriever = new DataRetriever<string>('Sample Data');
console.log(dataRetriever.getData()); // Outputs: Sample Data
