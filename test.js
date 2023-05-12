function separateString(str, char) {
    const index = str.indexOf(char);
    if (index !== -1) {
      return str.slice(index + 2);
    }
    return str;
  }
  
  // Example usage
  console.log(separateString('C building User Cata Flow', 'C')); // Output: You are a girl
  console.log(separateString('Y You are a student', 'Y')); // Output: You are a student
  