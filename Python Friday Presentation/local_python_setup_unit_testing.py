# As a beginner Python learner, your task is to demonstrate that you can set up Python locally and create simple unit tests. Follow these steps:

    # Install Python on your local machine if you haven't already. Make sure you have version 3.x installed.
    # Open a text editor or IDE (like PyCharm, VSCode, or Sublime Text) and create a new Python file.
    # Write a simple Python script with at least two functions that perform different operations. For example:
    
        # def add_numbers(a, b):
        #     return a + b

        # def multiply_numbers(a, b):
        #     return a * b

# Create a separate file for your unit tests (e.g., test_calculations.py). In this file, import the functions you defined and write unit tests for each function. Here's an example structure:
      
        # import unittest
        # from your_script_name import add_numbers, multiply_numbers

        # class TestCalculations(unittest.TestCase):
        #     def test_add_numbers(self):
        #         self.assertEqual(add_numbers(5, 3), 8)
        #         self.assertEqual(add_numbers(-1, 1), 0)

        #     def test_multiply_numbers(self):
        #         self.assertEqual(multiply_numbers(4, 5), 20)
        #         self.assertEqual(multiply_numbers(-2, 3), -6)

        # if __name__ == '__main__':
        #     unittest.main()

# Run the test file using Python from the command line. The exact command may vary depending on your operating system:
    # On Windows: python test_calculations.py
    # On macOS/Linux: python3 test_calculations.py
# Observe the output of the tests. They should pass if your functions work correctly.
# Modify one of your functions slightly (e.g., change add_numbers to always return 10) and run the tests again. You should see one test fail.
# Finally, fix the function that caused the test failure and run the tests once more to ensure all pass.

# Key Points to Consider:
    # Ensure your Python installation is correct and accessible from the command line.
    # Use proper indentation in your code.
    # Understand the structure of unit tests, including assertions and test cases.
    # Learn how to run Python scripts from the command line.