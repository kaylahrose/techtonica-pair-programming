# You are tasked with creating a program that reads student grades from a CSV file and performs some basic analysis on the data. Here's what you need to do:

# Read a CSV file containing student grades for different subjects. The CSV file should have columns for 'Name', 'Math Grade', 'Science Grade', and 'English Grade'.
    # Use Python's built-in csv module or the popular pandas library to read the CSV file.
    # Calculate the average grade for each subject across all students.
    # Find the student(s) with the highest overall grade (average of all three subjects).
    # Determine which subject has the highest average grade overall.
    # Create a simple report that summarizes these findings.
    # Use Python's string formatting capabilities to present the results in a readable format.

# Key Points to Consider:
    # Make sure to handle potential errors when reading the CSV file (e.g., missing files, incorrect data types).
    # Use appropriate data structures like lists or dictionaries to store student information.
    # Implement basic arithmetic operations to calculate averages.
    # Utilize Python's built-in functions like max() and min() where applicable.
    # Format your output to make it easy to read and understand.

# CSV Data Structure with Four Columns
# Name: The student's name
# Maths Grade: The grade achieved in Maths (assuming a grading scale similar to UK GCSEs)
# Science Grade: The grade achieved in Science
# English Grade: The grade achieved in English

    # Name,Maths Grade,Science Grade,English Grade
    # Alice,85,Y4:0,90
    # Bob,78,X2:0,95
    # Charlie,92,O3:0,88
    # David,76,N1:0,92
    # Eve,89,P2:0,91