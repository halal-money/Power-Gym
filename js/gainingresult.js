"use strict";

document.addEventListener("DOMContentLoaded", function() {
  // Function to get query parameters from the URL
  function getQueryParams() {
    const queryParams = new URLSearchParams(window.location.search);
    const result = {};

    for (const [key, value] of queryParams) {
      result[key] = value;
    }

    return result;
  }

  // Function to display results based on user's answers
  function displayResults() {
    const queryParams = getQueryParams();

    if (
      queryParams.q1 &&
      queryParams.q2 &&
      queryParams.q3 &&
      queryParams.q4
    ) {
      // Get user answers
      const q1Answer = queryParams.q1;
      const q2Answer = queryParams.q2;
      const q3Answer = queryParams.q3;
      const q4Answer = queryParams.q4;

      let resultText = "";
      if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
                Start with an additional 500 calories per day
                Monitor your progress and adjust as needed
                Protein: Aim for about 12 to 16 grams of protein per kilogram of body weight
                Fat: Include about 20-30% of your total daily calories from healthy fats
            

            
                Compound Exercises:
                    
                        Squats:
                                Sets: 3
                                Reps: 8-12
                                Rest: 60-90 seconds
                            
                        
                        Deadlifts:
                                Sets: 3
                                Reps: 8-10
                                Rest: 60-90 seconds
                            
                        
                        Bench Press:
                                Sets: 3
                                Reps: 8-12
                                Rest: 60-90 seconds
                            
                        

                Isolation Exercises:
                    
                        Bicep Curls:
                                Sets: 3
                                Reps: 10-15
                                Rest: 45-60 seconds
                            
                        
                        Tricep Dips:
                                Sets: 3
                                Reps: 10-15
                                Rest: 45-60 seconds
                            
                        
                        Lat Pulldowns:
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        

                Cardiovascular Exercise:
                    
                        Running or Cycling:
                                Frequency: 2 times a week
                                Duration: 20-30 minutes each session
                            
                        

                Core Exercises:
                    
                        Plank:
                                Sets: 3
                                Duration: 30-60 seconds
                                Rest: 30 seconds
                            
                        
                        Russian Twists:
                                Sets: 3
                                Reps: 15-20 (each side)
                                Rest: 30 seconds
                            
                        

                Rest Days:
                        Take at least 2 days off per week to allow your body to recover
                    
                

            Tips:
            
                Gradually increase the weight you're lifting to continue challenging your muscles
                Ensure you're consuming enough calories and protein to support muscle growth
                Stay hydrated and get enough sleep for optimal recovery
            
        `;
      } else if (
        q1Answer == '18-24' &&
        q2Answer == 'Gain 5-10 pounds' &&
        q3Answer == '1-6' &&
        q4Answer == '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
                Start with an additional 500 calories per day
                Monitor your progress, and adjust as needed
                Protein: Aim for about 12 to 16 grams of protein per kilogram of body weight
                Fat: Include about 20-30% of your total daily calories from healthy fats
            

            
                Full Body Strength Training:
                
                        Squats:
                                Sets: 3
                                Reps: 8-10
                                Rest: 60-90 seconds
                            
                        
                        Deadlifts:
                                Sets: 3
                                Reps: 8-10
                                Rest: 60-90 seconds
                            
                        
                        Bench Press:
                                Sets: 3
                                Reps: 8-10
                                Rest: 60-90 seconds
                            
                        

                Compound Exercises:
                
                        Barbell Rows:
                                Sets: 3
                                Reps: 10-12
                                Rest: 45-60 seconds
                            
                        
                        Overhead Press:
                                Sets: 3
                                Reps: 8-10
                                Rest: 45-60 seconds
                            
                        

                Hypertrophy (Muscle Building) Focus:
                
                        Dumbbell Lunges:
                                Sets: 3
                                Reps: 12-15 (each leg)
                                Rest: 45 seconds
                            
                        
                        Dumbbell Bicep Curls:
                                Sets: 3
                                Reps: 10-12
                                Rest: 45 seconds
                            
                        
                        Tricep Dips:
                                Sets: 3
                                Reps: 10-12
                                Rest: 45 seconds
                            
                        

                Cardiovascular Exercise:
                
                        Moderate Intensity Cardio (eg, jogging, cycling):
                                Frequency: 2 times a week
                                Duration: 20-30 minutes each session
                            
                        

                Rest Days:
                        Take at least 2 days off per week to allow for proper recovery
                    
                

                Tips:
                        Focus on progressive overload, gradually increasing weights to challenge your muscles
                        Ensure a balanced diet with a calorie surplus for weight gain
                        Stay hydrated, get adequate sleep, and listen to your body for optimal recovery
                    
                
            
        `;
      } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
                Start with an additional 500 calories per day
                Monitor your progress, and adjust as needed
                Protein: Aim for about 12 to 16 grams of protein per kilogram of body weight
                Fat: Include about 20-30% of your total daily calories from healthy fats

            
                Day 1: Full Body Strength
                        Squats:
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Bench Press:
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Bent Over Rows:
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        
                        Overhead Press:
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        

                Day 2: Cardio and Core
                        Cardio (eg, running, cycling, or elliptical):
                                Duration: 20-30 minutes
                                Intensity: Moderate
                            
                        
                        Plank:
                                Sets: 3
                                Duration: 60 seconds
                                Rest: 1 minute
                            
                        
                        Russian Twists:
                                Sets: 3
                                Reps: 15-20 each side
                                Rest: 1 minute
                            
                        

                Day 3: Hypertrophy (Muscle Building)
                        Deadlifts:
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Dumbbell Lunges:
                                Sets: 3
                                Reps: 12-15 each leg
                                Rest: 1-2 minutes
                            
                        
                        Pull-Ups or Lat Pulldowns:
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        
                        Tricep Dips:
                                Sets: 3
                                Reps: 12-15
                                Rest: 1-2 minutes
                            
                        

                Notes:
                        Warm-up before each session with 5-10 minutes of light cardio and dynamic stretching
                        Cool down with static stretching for 10 minutes after each session
                        Ensure proper form to prevent injuries
                        Gradually increase weights as the individual becomes stronger
                        Stay consistent and progressively overload the muscles for optimal gains
                        Adequate nutrition and recovery are essential for weight gain, so focus on a balanced diet and sufficient sleep
                    
                
            
        `;
      } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
                Start with an additional 500 calories per day
                Monitor your progress, and adjust as needed
                Protein: Aim for about 12 to 16 grams of protein per kilogram of body weight
                Fat: Include about 20-30% of your total daily calories from healthy fats

            
                Day 1: Full Body Strength
                        Squats:
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Bench Press:
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Bent Over Rows:
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        
                        Overhead Press:
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        

                Day 2: Cardio and Core
                        Cardio (eg, running, cycling, or elliptical):
                                Duration: 20-30 minutes
                                Intensity: Moderate
                            
                        
                        Plank:
                                Sets: 3
                                Duration: 60 seconds
                                Rest: 1 minute
                            
                        
                        Russian Twists:
                                Sets: 3
                                Reps: 15-20 each side
                                Rest: 1 minute
                            
                        

                Day 3: Hypertrophy (Muscle Building)
                        Deadlifts:
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Dumbbell Lunges:
                                Sets: 3
                                Reps: 12-15 each leg
                                Rest: 1-2 minutes
                            
                        
                        Pull-Ups or Lat Pulldowns:
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        
                        Tricep Dips:
                                Sets: 3
                                Reps: 12-15
                                Rest: 1-2 minutes
                            
                        

                Notes:
                        Warm-up before each session with 5-10 minutes of light cardio and dynamic stretching
                        Cool down with static stretching for 10 minutes after each session
                        Ensure proper form to prevent injuries
                        Gradually increase weights as the individual becomes stronger
                        Stay consistent and progressively overload the muscles for optimal gains
                        Adequate nutrition and recovery are essential for weight gain, so focus on a balanced diet and sufficient sleep
                    
                
            
        `;
      } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                Gaining 10-20 pounds:
                Aim for an extra 500 to 1,000 calories per day
                Monitor your weight gain and adjust calorie intake accordingly
                Protein: Aim for around 16 to 22 grams of protein per kilogram of body weight
                Fat: Include about 20-30% of your total daily calories from healthy fats

        
            
                Full Body Strength Training:
                
                        Squats:
                                Sets: 3
                                Reps: 8-10
                                Rest: 60-90 seconds
                            
                        
                        Deadlifts:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60-90 seconds
                            
                        
                        Bench Press:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60-90 seconds
                            
                        
                    

                Compound Exercises:
                    
                        Barbell Rows:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 45-60 seconds
                            
                        
                        Overhead Press:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 45-60 seconds
                            
                        
                    

                Hypertrophy (Muscle Building) Focus:
                    
                        Dumbbell Lunges:
                            
                                Sets: 3
                                Reps: 12-15 (each leg)
                                Rest: 45 seconds
                            
                        
                        Dumbbell Bicep Curls:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 45 seconds
                            
                        
                        Tricep Dips:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 45 seconds
                            
                        
                    

                Cardiovascular Exercise:
                    
                        Moderate Intensity Cardio (eg, jogging, cycling):
                            
                                Frequency: 2 times a week
                                Duration: 20-30 minutes each session
                            
                        
                    

                Rest Days:
                    
                        Take at least 2 days off per week for proper recovery
                    
            

            Tips:
            
                Focus on progressive overload, gradually increasing weights to challenge your muscles
                Ensure a balanced diet with a calorie surplus for weight gain
                Stay hydrated, get adequate sleep, and listen to your body for optimal recovery
            
        `;
      } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
                       
                Aim for an extra 500 to 1,000 calories per day
                Again, closely monitor your weight gain and adjust your calorie intake accordingly
                Protein: Aim for around 16 to 22 grams of protein per kilogram of body weight
                Fat: Include about 20-30% of your total daily calories from healthy fats
            

        
            
                Day 1: Full Body Strength
                    
                        Squats:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60-90 seconds
                            
                        
                        Deadlifts:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60-90 seconds
                            
                        
                        Bench Press:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60-90 seconds
                            
                        
                    

                Day 2: Compound Exercises
                    
                        Barbell Rows:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 45-60 seconds
                            
                        
                        Overhead Press:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 45-60 seconds
                            
                        
                    

                Day 3: Hypertrophy (Muscle Building)
                    
                        Dumbbell Lunges:
                            
                                Sets: 3
                                Reps: 12-15 each leg
                                Rest: 45 seconds
                            
                        
                        Dumbbell Bicep Curls:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 45 seconds
                            
                        
                        Tricep Dips:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 45 seconds
                            
                        
                    

                Day 4: Cardiovascular Exercise
                    
                        Moderate Intensity Cardio (eg, jogging, cycling):
                            
                                Frequency: 2 times a week
                                Duration: 20-30 minutes each session
                            
                        
                    

                Day 5: Rest Days
                    
                        Take at least 2 days off per week to allow for proper recovery
                    
                

                Tips:
                    
                        Focus on progressive overload, gradually increasing weights to challenge your muscles
                        Ensure a balanced diet with a calorie surplus for weight gain
                        Stay hydrated, get adequate sleep, and listen to your body for optimal recovery
                    
                
            
        `;
      } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                Aim for an extra 500 to 1,000 calories per day
                Again, closely monitor your weight gain and adjust your calorie intake accordingly
                Protein: Aim for around 16 to 22 grams of protein per kilogram of body weight
                Fat: Include about 20-30% of your total daily calories from healthy fats
            

        
            
                Day 1: Full Body Strength
                    
                        Squats:
                            
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Bench Press:
                            
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Bent Over Rows:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        
                        Overhead Press:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        
                    

                Day 2: Cardio and Core
                    
                        Cardio (eg, running, cycling, or elliptical):
                            
                                Duration: 20-30 minutes
                                Intensity: Moderate
                            
                        
                        Plank:
                            
                                Sets: 3
                                Duration: 60 seconds
                                Rest: 1 minute
                            
                        
                        Russian Twists:
                            
                                Sets: 3
                                Reps: 15-20 each side
                                Rest: 1 minute
                            
                        
                    

                Day 3: Hypertrophy (Muscle Building)
                    
                        Deadlifts:
                            
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Dumbbell Lunges:
                            
                                Sets: 3
                                Reps: 12-15 each leg
                                Rest: 1-2 minutes
                            
                        
                        Pull-Ups or Lat Pulldowns:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        
                        Tricep Dips:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 1-2 minutes
                            
                        
                    

                Notes:
                    
                        Warm-up before each session with 5-10 minutes of light cardio and dynamic stretching
                        Cool down with static stretching for 10 minutes after each session
                        Ensure proper form to prevent injuries
                        Gradually increase weights as the individual becomes stronger
                        Stay consistent and progressively overload the muscles for optimal gains
                        Adequate nutrition and recovery are essential for weight gain, so focus on a balanced diet and sufficient sleep
                    
                
            
        `;
      } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                Aim for an extra 500 to 1,000 calories per day
                Again, closely monitor your weight gain and adjust your calorie intake accordingly
                Protein: Aim for around 16 to 22 grams of protein per kilogram of body weight
                Fat: Include about 20-30% of your total daily calories from healthy fats
            

        
            
                Day 1: Full Body Strength
                    
                        Squats:
                            
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Bench Press:
                            
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Bent Over Rows:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        
                        Overhead Press:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        
                    

                Day 2: Cardio and Core
                    
                        Cardio (eg, running, cycling, or elliptical):
                            
                                Duration: 20-30 minutes
                                Intensity: Moderate
                            
                        
                        Plank:
                            
                                Sets: 3
                                Duration: 60 seconds
                                Rest: 1 minute
                            
                        
                        Russian Twists:
                            
                                Sets: 3
                                Reps: 15-20 each side
                                Rest: 1 minute
                            
                        
                    

                Day 3: Hypertrophy (Muscle Building)
                    
                        Deadlifts:
                            
                                Sets: 4
                                Reps: 8-10
                                Rest: 1-2 minutes
                            
                        
                        Dumbbell Lunges:
                            
                                Sets: 3
                                Reps: 12-15 each leg
                                Rest: 1-2 minutes
                            
                        
                        Pull-Ups or Lat Pulldowns:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 1-2 minutes
                            
                        
                        Tricep Dips:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 1-2 minutes
                            
                        
                    

                Notes:
                    
                        Warm-up before each session with 5-10 minutes of light cardio and dynamic stretching
                        Cool down with static stretching for 10 minutes after each session
                        Ensure proper form to prevent injuries
                        Gradually increase weights as the individual becomes stronger
                        Stay consistent and progressively overload the muscles for optimal gains
                        Adequate nutrition and recovery are essential for weight gain, so focus on a balanced diet and sufficient sleep
                    
                
            
        `;
      } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            Gaining 10-20 Pounds:
            
                For a more substantial weight gain, increase daily calorie intake by 500-1,000 calories
                Total daily calorie intake: 2,800 to 3,500 calories
                Protein intake: 12 to 17 grams per kilogram of body weight (eg, 84 to 119 grams for a person weighing 70 kg)
                Fat intake: 20-35% of total daily calories (eg, 62 to 122 grams for a diet of 2,800 to 3,500 calories)
            

        
            Workout Routine:
            Day 1: Full Body Workout
            
                Squats:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Bench Press:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Bent Over Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
            

            Day 2: Rest

            Day 3: Full Body Workout
            
                Deadlifts:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60 seconds
                    
                
                Overhead Press:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Pull-Ups (Assisted if necessary):
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60 seconds
                    
                
            

            Day 4: Rest

            Day 5: Full Body Workout
            
                Leg Press:
                    
                        Sets: 3
                        Reps: 12-15
                        Rest: 60 seconds
                    
                
                Dumbbell Chest Flyes:
                    
                        Sets: 3
                        Reps: 12-15
                        Rest: 60 seconds
                    
                
                Lat Pulldowns:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
            

            Day 6-7: Rest

          
            Additional Tips:
            
                Progressive Overload: Gradually increase the weight you lift to ensure continued muscle growth
                Nutrition: Consume a calorie surplus with a balanced diet focusing on protein intake for muscle repair and growth
                Rest and Recovery: Ensure adequate sleep and allow muscles to recover between workouts
            
        `;
      } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                To gain weight at a moderate pace, consume an additional 300-500 calories per day
                Total daily calorie intake can range from approximately 2,500 to 3,000 calories
                Protein: Aim for about 12 to 17 grams of protein per kilogram of body weight
                Fat: Approximately 20-35% of total daily calories
            

        
            
                Day 1: Full Body Workout
                    
                        Squats:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Bench Press:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Bent Over Rows:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                    

                Day 2: Rest

                Day 3: Full Body Workout
                    
                        Deadlifts:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60 seconds
                            
                        
                        Overhead Press:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Pull-Ups (Assisted if necessary):
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60 seconds
                            
                        
                    

                Day 4: Rest

                Day 5: Full Body Workout
                    
                        Leg Press:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 60 seconds
                            
                        
                        Dumbbell Chest Flyes:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 60 seconds
                            
                        
                        Lat Pulldowns:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                    

                Day 6-7: Rest
            

            Additional Tips:
            
                Progressive Overload: Gradually increase the weight you lift as you get stronger
                Nutrition: Consume a calorie surplus with a balanced diet focusing on protein intake for muscle growth
                Rest and Recovery: Ensure adequate sleep and allow muscles to recover between workouts
            
        `;
      } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                To gain weight at a moderate pace, consume an additional 300-500 calories per day
                Total daily calorie intake can range from approximately 2,500 to 3,000 calories
                Protein: Aim for about 12 to 17 grams of protein per kilogram of body weight
                Fat: Approximately 20-35% of total daily calories For a diet of 2,500 to 3,000 calories, this could be around 55 to 105 grams of fat per day
            

        
            Warm-up:
            Always start with a 5-10 minute warm-up to increase blood flow and prepare the body for exercise This can include light cardio such as jogging or jumping jacks, and dynamic stretches

            Workout Routine:
            
                Barbell Squats:
                    
                        Sets: 4
                        Reps: 8-12
                        Rest: 60-90 seconds
                    
                
                Deadlifts:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60-90 seconds
                    
                
                Bench Press:
                    
                        Sets: 4
                        Reps: 8-12
                        Rest: 60-90 seconds
                    
                
                Bent Over Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Overhead Press:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60 seconds
                    
                
                Dumbbell Lunges:
                    
                        Sets: 3
                        Reps: 12 (each leg)
                        Rest: 45-60 seconds
                    
                
                Pull-Ups:
                    
                        Sets: 3
                        Reps: As many as possible (bodyweight)
                        Rest: 60 seconds
                    
                
                Tricep Dips:
                    
                        Sets: 3
                        Reps: 10-15
                        Rest: 45 seconds
                    
                
                Bicep Curls (Barbell or Dumbbell):
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 45 seconds
                    
                
                Plank:
                    
                        Sets: 3
                        Duration: 60 seconds
                        Rest: 45 seconds
                    
                
            

            Cool Down:
            Finish with a 5-10 minute cool down, including static stretches for major muscle groups

            Notes:
            
                Adjust the weights used based on individual strength and gradually increase over time
                Ensure proper form to prevent injuries
                If possible, consult with a fitness professional to tailor the program to specific needs and ensure it aligns with individual fitness levels and any pre-existing conditions
            
        `;
      } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                To gain weight at a moderate pace, consume an additional 300-500 calories per day
                Total daily calorie intake can range from approximately 2,500 to 3,000 calories
                Protein: Aim for about 12 to 17 grams of protein per kilogram of body weight
                Fat: Approximately 20-35% of total daily calories For a diet of 2,500 to 3,000 calories, this could be around 55 to 105 grams of fat per day
            

        
            Warm-up:
            Always start with a 5-10 minute warm-up to increase blood flow and prepare the body for exercise This can include light cardio such as jogging or jumping jacks, and dynamic stretches

            Workout Routine:
            
                Barbell Squats:
                    
                        Sets: 4
                        Reps: 8-12
                        Rest: 60-90 seconds
                    
                
                Deadlifts:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60-90 seconds
                    
                
                Bench Press:
                    
                        Sets: 4
                        Reps: 8-12
                        Rest: 60-90 seconds
                    
                
                Bent Over Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Overhead Press:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60 seconds
                    
                
                Dumbbell Lunges:
                    
                        Sets: 3
                        Reps: 12 (each leg)
                        Rest: 45-60 seconds
                    
                
                Pull-Ups:
                    
                        Sets: 3
                        Reps: As many as possible (bodyweight)
                        Rest: 60 seconds
                    
                
                Tricep Dips:
                    
                        Sets: 3
                        Reps: 10-15
                        Rest: 45 seconds
                    
                
                Bicep Curls (Barbell or Dumbbell):
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 45 seconds
                    
                
                Plank:
                    
                        Sets: 3
                        Duration: 60 seconds
                        Rest: 45 seconds
                    
                
            

            Cool Down:
            Finish with a 5-10 minute cool down, including static stretches for major muscle groups

            Notes:
            
                Adjust the weights used based on individual strength and gradually increase over time
                Ensure proper form to prevent injuries
                If possible, consult with a fitness professional to tailor the program to specific needs and ensure it aligns with individual fitness levels and any pre-existing conditions
            
        `;
      } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                Gaining 10-20 Pounds:
                For a more substantial weight gain, increase daily calorie intake by 500-1,000 calories
                Total daily calorie intake: Approximately 2,800 to 3,500 calories
                Protein: Maintain 12 to 17 grams per kilogram of body weight (eg, 84 to 119 grams for a 70 kg person)
                Fat: Keep fat intake at 20-35% of total daily calories (eg, 62 to 122 grams for a 2,800 to 3,500 calorie diet)
            

        
            
                Workout Routine:

                Day 1: Full Body Workout
                    
                        Squats:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Bench Press:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Bent Over Rows:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                    

                Day 2: Rest

                Day 3: Full Body Workout
                    
                        Deadlifts:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60 seconds
                            
                        
                        Overhead Press:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Pull-Ups (Assisted if necessary):
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60 seconds
                            
                        
                    

                Day 4: Rest

                Day 5: Full Body Workout
                    
                        Leg Press:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 60 seconds
                            
                        
                        Dumbbell Chest Flyes:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 60 seconds
                            
                        
                        Lat Pulldowns:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                    

                Day 6-7: Rest
            

            Additional Tips:
            
                Progressive Overload: Gradually increase the weight to ensure continued muscle growth
                Nutrition: Consume a calorie surplus with a balanced diet focusing on protein intake
                Rest and Recovery: Ensure adequate sleep and allow muscles to recover between workouts
            
        `;
      } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                Gaining 10-20 Pounds:
                For a more substantial weight gain, increase daily calorie intake by 500-1,000 calories
                Total daily calorie intake: Approximately 2,800 to 3,500 calories
                Protein: Maintain 12 to 17 grams per kilogram of body weight (eg, 84 to 119 grams for a 70 kg person)
                Fat: Keep fat intake at 20-35% of total daily calories (eg, 62 to 122 grams for a 2,800 to 3,500 calorie diet)
            

        
            
                Workout Routine:

                Day 1: Full Body Workout
                    
                        Squats:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Bench Press:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Bent Over Rows:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                    

                Day 2: Rest

                Day 3: Full Body Workout
                    
                        Deadlifts:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60 seconds
                            
                        
                        Overhead Press:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Pull-Ups (Assisted if necessary):
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60 seconds
                            
                        
                    

                Day 4: Rest

                Day 5: Full Body Workout
                    
                        Leg Press:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 60 seconds
                            
                        
                        Dumbbell Chest Flyes:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 60 seconds
                            
                        
                        Lat Pulldowns:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                    

                Day 6-7: Rest
            

            Additional Tips:
            
                Progressive Overload: Gradually increase the weight to ensure continued muscle growth
                Nutrition: Consume a calorie surplus with a balanced diet focusing on protein intake
                Rest and Recovery: Ensure adequate sleep and allow muscles to recover between workouts
            
        `;
      } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                For a more substantial weight gain, increase daily calorie intake by 500-1,000 calories
                Total daily calorie intake can range from approximately 2,800 to 3,500
                Protein: Maintain a protein intake of 12 to 17 grams per kilogram of body weight
                Fat: Continue with a fat intake of approximately 20-35% of total daily calories For a diet of 2,800 to 3,500 calories, this could be around 62 to 122 grams of fat per day
            

        
            Workout Routine:
            
                Barbell Squats:
                    
                        Sets: 4
                        Reps: 8-12
                        Rest: 60-90 seconds
                    
                
                Deadlifts:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60-90 seconds
                    
                
                Bench Press:
                    
                        Sets: 4
                        Reps: 8-12
                        Rest: 60-90 seconds
                    
                
                Bent Over Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Overhead Press:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60 seconds
                    
                
                Dumbbell Lunges:
                    
                        Sets: 3
                        Reps: 12 (each leg)
                        Rest: 45-60 seconds
                    
                
                Pull-Ups:
                    
                        Sets: 3
                        Reps: As many as possible (bodyweight)
                        Rest: 60 seconds
                    
                
                Tricep Dips:
                    
                        Sets: 3
                        Reps: 10-15
                        Rest: 45 seconds
                    
                
                Bicep Curls (Barbell or Dumbbell):
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 45 seconds
                    
                
                Plank:
                    
                        Sets: 3
                        Duration: 60 seconds
                        Rest: 45 seconds
                    
                
            

            Cool Down:
            Finish with a 5-10 minute cool down, including static stretches for major muscle groups

            Notes:
            
                Adjust the weights used based on individual strength and gradually increase over time
                Ensure proper form to prevent injuries
                If possible, consult with a fitness professional to tailor the program to specific needs and ensure it aligns with individual fitness levels and any pre-existing conditions
            
        `;
      } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                For a more substantial weight gain, increase daily calorie intake by 500-1,000 calories
                Total daily calorie intake can range from approximately 2,800 to 3,500
                Protein: Maintain a protein intake of 12 to 17 grams per kilogram of body weight
                Fat: Continue with a fat intake of approximately 20-35% of total daily calories For a diet of 2,800 to 3,500 calories, this could be around 62 to 122 grams of fat per day
            

        
            Workout Routine:
            
                Barbell Squats:
                    
                        Sets: 4
                        Reps: 8-12
                        Rest: 60-90 seconds
                    
                
                Deadlifts:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60-90 seconds
                    
                
                Bench Press:
                    
                        Sets: 4
                        Reps: 8-12
                        Rest: 60-90 seconds
                    
                
                Bent Over Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Overhead Press:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60 seconds
                    
                
                Dumbbell Lunges:
                    
                        Sets: 3
                        Reps: 12 (each leg)
                        Rest: 45-60 seconds
                    
                
                Pull-Ups:
                    
                        Sets: 3
                        Reps: As many as possible (bodyweight)
                        Rest: 60 seconds
                    
                
                Tricep Dips:
                    
                        Sets: 3
                        Reps: 10-15
                        Rest: 45 seconds
                    
                
                Bicep Curls (Barbell or Dumbbell):
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 45 seconds
                    
                
                Plank:
                    
                        Sets: 3
                        Duration: 60 seconds
                        Rest: 45 seconds
                    
                
            

            Cool Down:
            Finish with a 5-10 minute cool down, including static stretches for major muscle groups

            Notes:
            
                Adjust the weights used based on individual strength and gradually increase over time
                Ensure proper form to prevent injuries
                If possible, consult with a fitness professional to tailor the program to specific needs and ensure it aligns with individual fitness levels and any pre-existing conditions
            
        `;
      } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            Gaining 5-10 Pounds:
            
                Protein: About 12 to 16 grams per kilogram of body weight
                Fat: About 20-35% of total daily calories
                Protein Intake: Multiply your weight in kilograms by the recommended protein range Example: If someone weighs 70 kg and aims for 16 g/kg, the daily protein intake would be 70 kg * 16 g/kg = 112 grams of protein
                Fat Intake: Determine the total daily calorie intake based on the recommended surplus Calculate the calorie contribution from fat (calories per gram of fat = 9) Example: If someone consumes 3000 calories per day and aims for 25% from fat, the daily fat intake would be (3000 calories * 025) / 9 = 833 grams of fat
            

        
            Workout Routine:

            1 Warm-up (5-10 minutes):
            
                Light cardio (jogging in place, jumping jacks)
                Dynamic stretches (arm circles, leg swings)
            

            2 Compound Exercises:
            
                a Squats:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                b Deadlifts:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                c Bench Press:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                d Overhead Press:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60 seconds
                    
                
            

            3 Isolation Exercises:
            
                a Bicep Curls:
                    
                        Sets: 3
                        Reps: 12-15
                        Rest: 45 seconds
                    
                
                b Tricep Dips:
                    
                        Sets: 3
                        Reps: 12-15
                        Rest: 45 seconds
                    
                
                c Dumbbell Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                d Lunges:
                    
                        Sets: 3
                        Reps: 10 each leg
                        Rest: 60 seconds
                    
                
            

            4 Core Exercises:
            
                a Plank:
                    
                        Sets: 3
                        Duration: 30-60 seconds
                        Rest: 30 seconds
                    
                
                b Russian Twists:
                    
                        Sets: 3
                        Reps: 20 (10 each side)
                        Rest: 30 seconds
                    
                
            

            5 Cool Down (5-10 minutes):
            
                Static stretches for major muscle groups (hamstrings, quadriceps, chest, shoulders, back)
            

              
            Additional Tips:
            
                Start with a weight that allows proper form, and gradually increase the weight as strength improves
                Stay hydrated and maintain a balanced diet with a caloric surplus for weight gain
                Adequate sleep is crucial for recovery and muscle growth
            
        `;
      } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
              Gaining 5-10 Pounds:
            
                Protein: About 12 to 16 grams per kilogram of body weight
                Fat: About 20-35% of total daily calories
                Protein Intake: Multiply your weight in kilograms by the recommended protein range Example: If someone weighs 70 kg and aims for 16 g/kg, the daily protein intake would be 70 kg * 16 g/kg = 112 grams of protein
                Fat Intake: Determine the total daily calorie intake based on the recommended surplus Calculate the calorie contribution from fat (calories per gram of fat = 9) Example: If someone consumes 3000 calories per day and aims for 25% from fat, the daily fat intake would be (3000 calories * 025) / 9 = 833 grams of fat
            

        
            Workout Routine:

            1 Warm-up (5-10 minutes):
            
                Light cardio (jogging in place, jumping jacks)
                Dynamic stretches (arm circles, leg swings)
            

            2 Compound Exercises:
            
                a Squats:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                b Deadlifts:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                c Bench Press:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                d Overhead Press:
                    
                        Sets: 3
                        Reps: 8-10
                        Rest: 60 seconds
                    
                
            

            3 Isolation Exercises:
            
                a Bicep Curls:
                    
                        Sets: 3
                        Reps: 12-15
                        Rest: 45 seconds
                    
                
                b Tricep Dips:
                    
                        Sets: 3
                        Reps: 12-15
                        Rest: 45 seconds
                    
                
                c Dumbbell Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                d Lunges:
                    
                        Sets: 3
                        Reps: 10 each leg
                        Rest: 60 seconds
                    
                
            

            4 Core Exercises:
            
                a Plank:
                    
                        Sets: 3
                        Duration: 30-60 seconds
                        Rest: 30 seconds
                    
                
                b Russian Twists:
                    
                        Sets: 3
                        Reps: 20 (10 each side)
                        Rest: 30 seconds
                    
                
            

            5 Cool Down (5-10 minutes):
            
                Static stretches for major muscle groups (hamstrings, quadriceps, chest, shoulders, back)
            

            Additional Tips:
            
                Start with a weight that allows proper form, and gradually increase the weight as strength improves
                Stay hydrated and maintain a balanced diet with a caloric surplus for weight gain
                Adequate sleep is crucial for recovery and muscle growth
            
        `;
      } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                To gain weight at a moderate pace, aim for a caloric surplus of about 250-500 calories per day
                Daily Caloric Intake: Current Maintenance Calories + 250-500 calories
                Protein: About 12 to 16 grams per kilogram of body weight
                Fat: About 20-35% of total daily calories
            

        
            Workout Routine:
            
                Squats:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Deadlifts:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Bench Press:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Bent Over Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 75 seconds
                    
                
                Overhead Press:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 75 seconds
                    
                
                Pull-Ups:
                    
                        Sets: 3
                        Reps: As many as possible
                        Rest: 60 seconds
                    
                
                Dumbbell Lunges:
                    
                        Sets: 3
                        Reps: 12-15 (each leg)
                        Rest: 60 seconds
                    
                
                Barbell Curl:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Tricep Dips:
                    
                        Sets: 3
                        Reps: 12-15
                        Rest: 60 seconds
                    
                
                Plank:
                    
                        Sets: 3
                        Duration: 60 seconds
                        Rest: 60 seconds
                    
                
            

            Notes:
            
                Perform each exercise with proper form, focusing on controlled movements
                Start with a weight that challenges you within the specified rep range
                Gradually increase the weight as your strength improves
                Ensure a balanced diet with a calorie surplus to support weight gain
                Stay hydrated and get adequate rest for recovery
            
        `;
      } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                To gain weight at a moderate pace, aim for a caloric surplus of about 250-500 calories per day
                Daily Caloric Intake: Current Maintenance Calories + 250-500 calories
                Protein: About 12 to 16 grams per kilogram of body weight
                Fat: About 20-35% of total daily calories
            

        
            Workout Routine:
            
                Squats:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Deadlifts:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Bench Press:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Bent Over Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 75 seconds
                    
                
                Overhead Press:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 75 seconds
                    
                
                Pull-Ups:
                    
                        Sets: 3
                        Reps: As many as possible
                        Rest: 60 seconds
                    
                
                Dumbbell Lunges:
                    
                        Sets: 3
                        Reps: 12-15 (each leg)
                        Rest: 60 seconds
                    
                
                Barbell Curl:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Tricep Dips:
                    
                        Sets: 3
                        Reps: 12-15
                        Rest: 60 seconds
                    
                
                Plank:
                    
                        Sets: 3
                        Duration: 60 seconds
                        Rest: 60 seconds
                    
                
            

            Notes:
            
                Perform each exercise with proper form, focusing on controlled movements
                Start with a weight that challenges you within the specified rep range
                Gradually increase the weight as your strength improves
                Ensure a balanced diet with a calorie surplus to support weight gain
                Stay hydrated and get adequate rest for recovery
            
        `;
      } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:
            
            
                Gaining 10-20 Pounds:
                Protein: About 16 to 22 grams per kilogram of body weight
                Fat: About 20-35% of total daily calories
                Protein Intake: Multiply weight in kilograms by the recommended protein range (eg, 16 g/kg for 70 kg = 112 grams)
                Fat Intake: Calculate the calorie contribution from fat (eg, 25% from 3000 calories = 833 grams of fat)
            

        
            
                Workout Routine:

                1 Warm-up (5-10 minutes):
                    
                        Light cardio (jogging in place, jumping jacks)
                        Dynamic stretches (arm circles, leg swings)
                    
                

                2 Compound Exercises:
                    
                        Squats:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Deadlifts:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 90 seconds
                            
                        
                        Bench Press:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Overhead Press:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60 seconds
                            
                        
                    

                3 Isolation Exercises:
                    
                        Bicep Curls:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 45 seconds
                            
                        
                        Tricep Dips:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 45 seconds
                            
                        
                        Dumbbell Rows:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Lunges:
                            
                                Sets: 3
                                Reps: 10 each leg
                                Rest: 60 seconds
                            
                        
                    

                4 Core Exercises:
                    
                        Plank:
                            
                                Sets: 3
                                Duration: 30-60 seconds
                                Rest: 30 seconds
                            
                        
                        Russian Twists:
                            
                                Sets: 3
                                Reps: 20 (10 each side)
                                Rest: 30 seconds
                            
                        
                    

                5 Cool Down (5-10 minutes):
                    
                        Static stretches for major muscle groups (hamstrings, quadriceps, chest, shoulders, back)
                    
                
            

            Additional Tips:
            
                Start with a weight that allows proper form and gradually increase as strength improves
                Stay hydrated and maintain a balanced diet with a caloric surplus for weight gain
                Adequate sleep is crucial for recovery and muscle growth
            
        `;
      } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                Gaining 10-20 Pounds:
                Protein: About 16 to 22 grams per kilogram of body weight
                Fat: About 20-35% of total daily calories
                Protein Intake: Multiply weight in kilograms by the recommended protein range (eg, 16 g/kg for 70 kg = 112 grams)
                Fat Intake: Calculate the calorie contribution from fat (eg, 25% from 3000 calories = 833 grams of fat)
            

        
            
                Workout Routine:

                1 Warm-up (5-10 minutes):
                    
                        Light cardio (jogging in place, jumping jacks)
                        Dynamic stretches (arm circles, leg swings)
                    
                

                2 Compound Exercises:
                    
                        Squats:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Deadlifts:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 90 seconds
                            
                        
                        Bench Press:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Overhead Press:
                            
                                Sets: 3
                                Reps: 8-10
                                Rest: 60 seconds
                            
                        
                    

                3 Isolation Exercises:
                    
                        Bicep Curls:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 45 seconds
                            
                        
                        Tricep Dips:
                            
                                Sets: 3
                                Reps: 12-15
                                Rest: 45 seconds
                            
                        
                        Dumbbell Rows:
                            
                                Sets: 3
                                Reps: 10-12
                                Rest: 60 seconds
                            
                        
                        Lunges:
                            
                                Sets: 3
                                Reps: 10 each leg
                                Rest: 60 seconds
                            
                        
                    

                4 Core Exercises:
                    
                        Plank:
                            
                                Sets: 3
                                Duration: 30-60 seconds
                                Rest: 30 seconds
                            
                        
                        Russian Twists:
                            
                                Sets: 3
                                Reps: 20 (10 each side)
                                Rest: 30 seconds
                            
                        
                    

                5 Cool Down (5-10 minutes):
                    
                        Static stretches for major muscle groups (hamstrings, quadriceps, chest, shoulders, back)
                    
                
            

            Additional Tips:
            
                Start with a weight that allows proper form and gradually increase as strength improves
                Stay hydrated and maintain a balanced diet with a caloric surplus for weight gain
                Adequate sleep is crucial for recovery and muscle growth
            
        `;
      } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                For a more significant weight gain, aim for a caloric surplus of around 500-1000 calories per day
                Daily Caloric Intake: Current Maintenance Calories + 500-1000 calories
                Protein: About 16 to 22 grams per kilogram of body weight
                Fat: About 20-35% of total daily calories
            

        
            Workout Routine:
            
                Squats:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Deadlifts:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Bench Press:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Bent Over Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 75 seconds
                    
                
                Overhead Press:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 75 seconds
                    
                
                Pull-Ups:
                    
                        Sets: 3
                        Reps: As many as possible
                        Rest: 60 seconds
                    
                
                Dumbbell Lunges:
                    
                        Sets: 3
                        Reps: 12-15 (each leg)
                        Rest: 60 seconds
                    
                
                Barbell Curl:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Tricep Dips:
                    
                        Sets: 3
                        Reps: 12-15
                        Rest: 60 seconds
                    
                
                Plank:
                    
                        Sets: 3
                        Duration: 60 seconds
                        Rest: 60 seconds
                    
                
            

            Notes:
            
                Perform each exercise with proper form, focusing on controlled movements
                Start with a weight that challenges you within the specified rep range
                Gradually increase the weight as your strength improves
                Ensure a balanced diet with a calorie surplus to support weight gain
                Stay hydrated and get adequate rest for recovery
            
        `;
      } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
      ) {
        resultText = `
            Recommended Plan:

            
            
                For a more significant weight gain, aim for a caloric surplus of around 500-1000 calories per day
                Daily Caloric Intake: Current Maintenance Calories + 500-1000 calories
                Protein: About 16 to 22 grams per kilogram of body weight
                Fat: About 20-35% of total daily calories
            

        
            Workout Routine:
            
                Squats:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Deadlifts:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Bench Press:
                    
                        Sets: 4
                        Reps: 8-10
                        Rest: 90 seconds
                    
                
                Bent Over Rows:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 75 seconds
                    
                
                Overhead Press:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 75 seconds
                    
                
                Pull-Ups:
                    
                        Sets: 3
                        Reps: As many as possible
                        Rest: 60 seconds
                    
                
                Dumbbell Lunges:
                    
                        Sets: 3
                        Reps: 12-15 (each leg)
                        Rest: 60 seconds
                    
                
                Barbell Curl:
                    
                        Sets: 3
                        Reps: 10-12
                        Rest: 60 seconds
                    
                
                Tricep Dips:
                    
                        Se
                        Reps: 
                        Rest: 60 se
                    
                
                Plank:
                    
                        Se
                        Duration: 60 se
                        Rest: 60 se
                    
                
            

            Notes:
            
                Perform each exercise with proper form, focusing on controlled movements
                Start with a weight that challenges you within the specified rep range
                Gradually increase the weight as your strength improves
                Ensure a balanced diet with a calorie surplus to support weight gain
                Stay hydrated and get adequate rest for recovery
            
        `;
      } else {
        resultText = 'No specific plan available for the selected criteria';
      }

      // Display the result on the page
      const resultsContainer = document.getElementById("resultsContainer");
      resultsContainer.textContent = resultText;
    } else {
      // Handle the case where parameters are missing
      console.error("Missing parameters in the URL");
    }
  }

  // Call the function to display results when the DOM is loaded
  displayResults();
});



