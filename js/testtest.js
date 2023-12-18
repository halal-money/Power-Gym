"use strict";

document.addEventListener("DOMContentLoaded", function () {
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
    if (q1Answer === '18-24' && q2Answer === 'Gain 5-10 pounds' && q3Answer === '1-6' && q4Answer === '3 times a week (45 minutes each)') {
        resultText = `
            Recommended Plan:

                Start with an additional 500 calories per day.
                Monitor your progress and adjust as needed.
                Protein: Aim for about 1.2 to 1.6 grams of protein per kilogram of body weight.
                Fat: Include about 20-30% of your total daily calories from healthy fats.

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
                        Take at least 2 days off per week to allow your body to recover.

            Tips:
                Gradually increase the weight you're lifting to continue challenging your muscles.
                Ensure you're consuming enough calories and protein to support muscle growth.
                Stay hydrated and get enough sleep for optimal recovery.
        `;
    } else if (q1Answer === '18-24' && q2Answer === 'Gain 5-10 pounds' && q3Answer === '1-6' && q4Answer === '4 times a week (60 minutes each)') {
        resultText = `
            Recommended Plan:

                Start with an additional 500 calories per day.
                Monitor your progress, and adjust as needed.
                Protein: Aim for about 1.2 to 1.6 grams of protein per kilogram of body weight.
                Fat: Include about 20-30% of your total daily calories from healthy fats.

                Full Body Strength Training:
                        Squats:
                                Sets: 3
                                Reps: 8-10</li>
                                Rest: 60-90 seconds
                        Deadlifts:
                                Sets: 3
                                Reps: 8-10</li>
                                Rest: 60-90 seconds
                        Bench Press:
                                Sets: 3
                                Reps: 8-10</li>
                                Rest: 60-90 seconds

                Compound Exercises:
                                Rest: 45-60 seconds
                        Overhead Press:
                                Sets: 3
                                Reps: 8-10

                Hypertrophy (Muscle Building) Focus:
                                Reps: 12-15 (each leg)
                                Rest: 45 seconds
                                Sets: 3
                                Reps: 10-12
                                Rest: 45 seconds
                        Tricep Dips:
                                Sets: 3
                                Reps: 10-12
                                Rest: 45 seconds

                Cardiovascular Exercise:
                        Moderate Intensity Cardio (e.g., jogging, cycling):
                                Frequency: 2 times a week
                                Duration: 20-30 minutes each session

                Rest Days:
                        Take at least 2 days off per week to allow for proper recovery.

                Tips:
                        Focus on progressive overload, gradually increasing weights to challenge your muscles.
                        Ensure a balanced diet with a calorie surplus for weight gain.
                        Stay hydrated, get adequate sleep, and listen to your body for optimal recovery.
        `;
    } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                Start with an additional 500 calories per day.
                Monitor your progress, and adjust as needed.
                Protein: Aim for about 1.2 to 1.6 grams of protein per kilogram of body weight.
                Fat: Include about 20-30% of your total daily calories from healthy fats.

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
                        Cardio (e.g., running, cycling, or elliptical):
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
                        Warm-up before each session with 5-10 minutes of light cardio and dynamic stretching.
                        Cool down with static stretching for 10 minutes after each session.
                        Ensure proper form to prevent injuries.
                        Gradually increase weights as the individual becomes stronger.
                        Stay consistent and progressively overload the muscles for optimal gains.
                        Adequate nutrition and recovery are essential for weight gain, so focus on a balanced diet and sufficient sleep.
                    
                
            
        `;
    } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
        Recommended Plan:

        Start with an additional 500 calories per day.
        Monitor your progress, and adjust as needed.
        Protein: Aim for about 1.2 to 1.6 grams of protein per kilogram of body weight.
        Fat: Include about 20-30% of your total daily calories from healthy fats.
    
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
        Cardio (e.g., running, cycling, or elliptical):
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
        Warm-up before each session with 5-10 minutes of light cardio and dynamic stretching.
        Cool down with static stretching for 10 minutes after each session.
        Ensure proper form to prevent injuries.
        Gradually increase weights as the individual becomes stronger.
        Stay consistent and progressively overload the muscles for optimal gains.
        Adequate nutrition and recovery are essential for weight gain, so focus on a balanced diet and sufficient sleep.
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
        Aim for an extra 500 to 1,000 calories per day.
        Monitor your weight gain and adjust calorie intake accordingly.
        Protein: Aim for around 1.6 to 2.2 grams of protein per kilogram of body weight.
        
         Sets: 3
         Reps: 8-10
         Sets: 3
         Reps: 8-10
         Sets: 3
         Reps: 8-10
        
        Compound Exercises:
            Reps: 10-12
            Rest: 45-60 seconds
            Sets: 3
        
        Dumbbell Lunges:
            Sets: 3
            Reps: 12-15 (each leg)
            Rest: 45 seconds
            Sets: 3
            Reps: 10-12
            Rest: 45 seconds
        
        Tricep Dips:
            Sets: 3
            Reps: 10-12
            Rest: 45 seconds
        
        Cardiovascular Exercise:
            Moderate Intensity Cardio (e.g., jogging, cycling):
            Frequency: 2 times a week
            Duration: 20-30 minutes each session
        
        Rest Days:
            Take at least 2 days off per week for proper recovery.
        
        Tips:
            Focus on progressive overload, gradually increasing weights to challenge your muscles.
            Ensure a balanced diet with a calorie surplus for weight gain.
            Stay hydrated, get adequate sleep, and listen to your body for optimal recovery.
        `;
    } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>Aim for an extra 500 to 1,000 calories per day.</li>
                <li>Again, closely monitor your weight gain and adjust your calorie intake accordingly.</li>
                <li>Protein: Aim for around 1.6 to 2.2 grams of protein per kilogram of body weight.</li>
                <li>Fat: Include about 20-30% of your total daily calories from healthy fats.</li>

                <li><strong>Day 1: Full Body Strength</strong>
                        <li>Squats:
                                <li>Sets: 3</li>
                                <li>Reps: 8-10</li>
                                <li>Rest: 60-90 seconds</li>
                        <li>Deadlifts:
                                <li>Sets: 3</li>
                                <li>Reps: 8-10</li>
                                <li>Rest: 60-90 seconds</li>
                        <li>Bench Press:
                                <li>Sets: 3</li>
                                <li>Reps: 8-10</li>
                                <li>Rest: 60-90 seconds</li>
                    </ul>
                </li>

                <li><strong>Day 2: Compound Exercises</strong>
                    <ul>
                                <li>Rest: 45-60 seconds</li>
                            </ul>
                        <li>Overhead Press:
                                <li>Sets: 3</li>
                                <li>Reps: 8-10</li>
                        </li>
                </li>

                <li><strong>Day 3: Hypertrophy (Muscle Building)</strong>
                            <ul>
                                <li>Reps: 12-15 each leg</li>
                                <li>Rest: 45 seconds</li>
                            </ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 45 seconds</li>
                            </ul>
                        </li>
                        <li>Tricep Dips:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 45 seconds</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>Day 4: Cardiovascular Exercise</strong>
                    <ul>
                        <li>Moderate Intensity Cardio (e.g., jogging, cycling):
                            <ul>
                                <li>Frequency: 2 times a week</li>
                                <li>Duration: 20-30 minutes each session</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>Day 5: Rest Days</strong>
                    <ul>
                        <li>Take at least 2 days off per week to allow for proper recovery.</li>
                    </ul>
                </li>

                <li><strong>Tips:</strong>
                    <ul>
                        <li>Focus on progressive overload, gradually increasing weights to challenge your muscles.</li>
                        <li>Ensure a balanced diet with a calorie surplus for weight gain.</li>
                        <li>Stay hydrated, get adequate sleep, and listen to your body for optimal recovery.</li>
                    </ul>
                </li>
            </ol>
        `;
    } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>Aim for an extra 500 to 1,000 calories per day.</li>
                <li>Again, closely monitor your weight gain and adjust your calorie intake accordingly.</li>
                <li>Protein: Aim for around 1.6 to 2.2 grams of protein per kilogram of body weight.</li>
                <li>Fat: Include about 20-30% of your total daily calories from healthy fats.</li>

                <li><strong>Day 1: Full Body Strength</strong>
                        <li>Squats:
                                <li>Sets: 4</li>
                                <li>Reps: 8-10</li>
                                <li>Rest: 1-2 minutes</li>
                        <li>Bench Press:
                                <li>Sets: 4</li>
                                <li>Reps: 8-10</li>
                                <li>Rest: 1-2 minutes</li>
                        <li>Bent Over Rows:
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 1-2 minutes</li>
                        <li>Overhead Press:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 1-2 minutes</li>

                <li><strong>Day 2: Cardio and Core</strong>
                        <li>Cardio (e.g., running, cycling, or elliptical):
                                <li>Duration: 20-30 minutes</li>
                                <li>Intensity: Moderate</li>
                        <li>Plank:
                                <li>Sets: 3</li>
                                <li>Duration: 60 seconds</li>
                                <li>Rest: 1 minute</li>
                        <li>Russian Twists:
                                <li>Sets: 3</li>
                                <li>Reps: 15-20 each side</li>
                                <li>Rest: 1 minute</li>
                </li>

                <li><strong>Day 3: Hypertrophy (Muscle Building)</strong>
                    <ul>
                        <li>Deadlifts:
                            <ul>
                                <li>Sets: 4</li>
                                <li>Reps: 8-10</li>
                                <li>Rest: 1-2 minutes</li>
                            </ul>
                        </li>
                        <li>Dumbbell Lunges:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 12-15 each leg</li>
                                <li>Rest: 1-2 minutes</li>
                            </ul>
                        </li>
                        <li>Pull-Ups or Lat Pulldowns:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 1-2 minutes</li>
                            </ul>
                        </li>
                        <li>Tricep Dips:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 12-15</li>
                                <li>Rest: 1-2 minutes</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>Notes:</strong>
                    <ul>
                        <li>Warm-up before each session with 5-10 minutes of light cardio and dynamic stretching.</li>
                        <li>Cool down with static stretching for 10 minutes after each session.</li>
                        <li>Ensure proper form to prevent injuries.</li>
                        <li>Gradually increase weights as the individual becomes stronger.</li>
                        <li>Stay consistent and progressively overload the muscles for optimal gains.</li>
                        <li>Adequate nutrition and recovery are essential for weight gain, so focus on a balanced diet and sufficient sleep.</li>
                    </ul>
                </li>
            </ol>
        `;
    } else if (
        q1Answer === '18-24' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>Aim for an extra 500 to 1,000 calories per day.</li>
                <li>Again, closely monitor your weight gain and adjust your calorie intake accordingly.</li>
                <li>Protein: Aim for around 1.6 to 2.2 grams of protein per kilogram of body weight.</li>
                <li>Fat: Include about 20-30% of your total daily calories from healthy fats.</li>

                <li><strong>Day 1: Full Body Strength</strong>
                        <li>Squats:
                                <li>Sets: 4</li>
                                <li>Reps: 8-10</li>
                                <li>Rest: 1-2 minutes</li>
                        <li>Bench Press:
                                <li>Sets: 4</li>
                                <li>Reps: 8-10</li>
                                <li>Rest: 1-2 minutes</li>
                        <li>Bent Over Rows:
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 1-2 minutes</li>
                        <li>Overhead Press:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 1-2 minutes</li>

                <li><strong>Day 2: Cardio and Core</strong>
                        <li>Cardio (e.g., running, cycling, or elliptical):
                                <li>Duration: 20-30 minutes</li>
                                <li>Intensity: Moderate</li>
                        <li>Plank:
                                <li>Sets: 3</li>
                                <li>Duration: 60 seconds</li>
                                <li>Rest: 1 minute</li>
                        <li>Russian Twists:
                                <li>Sets: 3</li>
                                <li>Reps: 15-20 each side</li>
                                <li>Rest: 1 minute</li>
                </li>

                <li><strong>Day 3: Hypertrophy (Muscle Building)</strong>
                    <ul>
                        <li>Deadlifts:
                            <ul>
                                <li>Sets: 4</li>
                                <li>Reps: 8-10</li>
                                <li>Rest: 1-2 minutes</li>
                            </ul>
                        </li>
                        <li>Dumbbell Lunges:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 12-15 each leg</li>
                                <li>Rest: 1-2 minutes</li>
                            </ul>
                        </li>
                        <li>Pull-Ups or Lat Pulldowns:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 1-2 minutes</li>
                            </ul>
                        </li>
                        <li>Tricep Dips:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 12-15</li>
                                <li>Rest: 1-2 minutes</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>Notes:</strong>
                    <ul>
                        <li>Warm-up before each session with 5-10 minutes of light cardio and dynamic stretching.</li>
                        <li>Cool down with static stretching for 10 minutes after each session.</li>
                        <li>Ensure proper form to prevent injuries.</li>
                        <li>Gradually increase weights as the individual becomes stronger.</li>
                        <li>Stay consistent and progressively overload the muscles for optimal gains.</li>
                        <li>Adequate nutrition and recovery are essential for weight gain, so focus on a balanced diet and sufficient sleep.</li>
                    </ul>
                </li>
            </ol>
        `;
    } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '3 times a week (45 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

            <ul>
                <li>For a more substantial weight gain, increase daily calorie intake by 500-1,000 calories.</li>
                <li>Total daily calorie intake: 2,800 to 3,500 calories.</li>
                <li>Protein intake: 1.2 to 1.7 grams per kilogram of body weight (e.g., 84 to 119 grams for a person weighing 70 kg).</li>
            </ul>
            <p>Workout Routine:</p>
            <ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                </li>
            </ul>

            <h4>Day 2: Rest</h4>

                        <li>Sets: 3</li>
                        <li>Reps: 8-10</li>
                    </ul>
                <li>Overhead Press:
                    <ul>
                        <li>Rest: 60 seconds</li>
                </li>
                <li>Pull-Ups (Assisted if necessary):
                    <ul>
                        <li>Rest: 60 seconds</li>
                </li>
            </ul>

            <ul>
                <li>Leg Press:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 12-15</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
                <li>Dumbbell Chest Flyes:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 12-15</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
                <li>Lat Pulldowns:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
            </ul>

            <h4>Day 6-7: Rest</h4>

            <h3>Additional Tips:</h3>
            <ul>
                <li>Progressive Overload: Gradually increase the weight you lift to ensure continued muscle growth.</li>
                <li>Nutrition: Consume a calorie surplus with a balanced diet focusing on protein intake for muscle repair and growth.</li>
                <li>Rest and Recovery: Ensure adequate sleep and allow muscles to recover between workouts.</li>
            </ul>
        `;
    } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>To gain weight at a moderate pace, consume an additional 300-500 calories per day.</li>
                <li>Total daily calorie intake can range from approximately 2,500 to 3,000 calories.</li>
                <li>Protein: Aim for about 1.2 to 1.7 grams of protein per kilogram of body weight.</li>
                <li>Fat: Approximately 20-35% of total daily calories.</li>

                <li><strong>Day 1: Full Body Workout</strong>
                        <li>Squats:
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 60 seconds</li>
                        <li>Bench Press:
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 60 seconds</li>
                        <li>Bent Over Rows:
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 60 seconds</li>
                    </ul>
                </li>

                <li><strong>Day 2: Rest</strong></li>

                                <li>Sets: 3</li>
                                <li>Reps: 8-10</li>
                            </ul>
                        <li>Overhead Press:
                            <ul>
                                <li>Rest: 60 seconds</li>
                        </li>
                        <li>Pull-Ups (Assisted if necessary):
                            <ul>
                                <li>Rest: 60 seconds</li>
                        </li>
                    </ul>
                </li>
                <li><strong>Day 5: Full Body Workout</strong>
                    <ul>
                        <li>Leg Press:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 12-15</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                        <li>Dumbbell Chest Flyes:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 12-15</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                        <li>Lat Pulldowns:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>Day 6-7: Rest</strong></li>
            </ol>

            <p><strong>Additional Tips:</strong></p>
            <ul>
                <li>Progressive Overload: Gradually increase the weight you lift as you get stronger.</li>
                <li>Nutrition: Consume a calorie surplus with a balanced diet focusing on protein intake for muscle growth.</li>
                <li>Rest and Recovery: Ensure adequate sleep and allow muscles to recover between workouts.</li>
            </ul>
        `;
    } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>To gain weight at a moderate pace, consume an additional 300-500 calories per day.</li>
                <li>Total daily calorie intake can range from approximately 2,500 to 3,000 calories.</li>
                <li>Protein: Aim for about 1.2 to 1.7 grams of protein per kilogram of body weight.</li>
                <li>Fat: Approximately 20-35% of total daily calories. For a diet of 2,500 to 3,000 calories, this could be around 55 to 105 grams of fat per day.</li>

            <p>Always start with a 5-10 minute warm-up to increase blood flow and prepare the body for exercise. This can include light cardio such as jogging or jumping jacks, and dynamic stretches.</p>
            <h4>Workout Routine:</h4>
                <li>Barbell Squats:
                    <ul>
                        <li>Sets: 4</li>
                    </ul>
                <li>Deadlifts:
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Bench Press:
                    <ul>
                        <li>Sets: 4</li>
                    </ul>
                </li>
                <li>Bent Over Rows:
                    <ul>
                        <li>Sets: 3</li>
                <li>Overhead Press:
                    <ul>
                        <li>Reps: 8-10</li>
                    </ul>
                </li>
                        <li>Sets: 3</li>
                        <li>Rest: 45-60 seconds</li>
                    </ul>
                </li>
                        <li>Sets: 3</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
                        <li>Reps: 10-15</li>
                        <li>Rest: 45 seconds</li>
                    </ul>
                </li>
                <li>Bicep Curls (Barbell or Dumbbell):
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 45 seconds</li>
                    </ul>
                </li>
                <li>Plank:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Duration: 60 seconds</li>
                        <li>Rest: 45 seconds</li>
                    </ul>
                </li>
            </ul>

            <h4>Cool Down:</h4>
            <p>Finish with a 5-10 minute cool down, including static stretches for major muscle groups.</p>

            <h4>Notes:</h4>
            <ul>
                <li>Adjust the weights used based on individual strength and gradually increase over time.</li>
                <li>Ensure proper form to prevent injuries.</li>
                <li>If possible, consult with a fitness professional to tailor the program to specific needs and ensure it aligns with individual fitness levels and any pre-existing conditions.</li>
            </ul>
        `;
    } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>To gain weight at a moderate pace, consume an additional 300-500 calories per day.</li>
                <li>Total daily calorie intake can range from approximately 2,500 to 3,000 calories.</li>
                <li>Protein: Aim for about 1.2 to 1.7 grams of protein per kilogram of body weight.</li>
                <li>Fat: Approximately 20-35% of total daily calories. For a diet of 2,500 to 3,000 calories, this could be around 55 to 105 grams of fat per day.</li>

            <p>Always start with a 5-10 minute warm-up to increase blood flow and prepare the body for exercise. This can include light cardio such as jogging or jumping jacks, and dynamic stretches.</p>
            <h4>Workout Routine:</h4>
                <li>Barbell Squats:
                    <ul>
                        <li>Sets: 4</li>
                    </ul>
                <li>Deadlifts:
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Bench Press:
                    <ul>
                        <li>Sets: 4</li>
                    </ul>
                </li>
                <li>Bent Over Rows:
                    <ul>
                        <li>Sets: 3</li>
                <li>Overhead Press:
                    <ul>
                        <li>Reps: 8-10</li>
                    </ul>
                </li>
                        <li>Sets: 3</li>
                        <li>Rest: 45-60 seconds</li>
                    </ul>
                </li>
                        <li>Sets: 3</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
                        <li>Reps: 10-15</li>
                        <li>Rest: 45 seconds</li>
                    </ul>
                </li>
                <li>Bicep Curls (Barbell or Dumbbell):
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 45 seconds</li>
                    </ul>
                </li>
                <li>Plank:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Duration: 60 seconds</li>
                        <li>Rest: 45 seconds</li>
                    </ul>
                </li>
            </ul>

            <h4>Cool Down:</h4>
            <p>Finish with a 5-10 minute cool down, including static stretches for major muscle groups.</p>

            <h4>Notes:</h4>
            <ul>
                <li>Adjust the weights used based on individual strength and gradually increase over time.</li>
                <li>Ensure proper form to prevent injuries.</li>
                <li>If possible, consult with a fitness professional to tailor the program to specific needs and ensure it aligns with individual fitness levels and any pre-existing conditions.</li>
            </ul>
        `;
    } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '3 times a week (45 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>Gaining 10-20 Pounds:</li>
                <li>For a more substantial weight gain, increase daily calorie intake by 500-1,000 calories.</li>
                <li>Total daily calorie intake: Approximately 2,800 to 3,500 calories.</li>
                <li>Protein: Maintain 1.2 to 1.7 grams per kilogram of body weight (e.g., 84 to 119 grams for a 70 kg person).</li>
            </ul>
            <ol>

                    <ul>
                        <li>Squats:
                            <ul>
                                <li>Rest: 60 seconds</li>
                        </li>
                        <li>Bench Press:
                            <ul>
                                <li>Rest: 60 seconds</li>
                        </li>
                        <li>Bent Over Rows:
                            <ul>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                    <ul>
                        <li>Deadlifts:
                                <li>Sets: 3</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                            <ul>
                                <li>Reps: 10-12</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                            <ul>
                                <li>Reps: 8-10</li>
                                <li>Rest: 60 seconds</li>
                            </ul>

                <li><strong>Day 4: Rest</strong></li>

                <li><strong>Day 5: Full Body Workout</strong>
                    <ul>
                        <li>Leg Press:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 12-15</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                        <li>Dumbbell Chest Flyes:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 12-15</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                        <li>Lat Pulldowns:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>Day 6-7: Rest</strong></li>
            </ol>

            <h3>Additional Tips:</h3>
            <ul>
                <li>Progressive Overload: Gradually increase the weight to ensure continued muscle growth.</li>
                <li>Nutrition: Consume a calorie surplus with a balanced diet focusing on protein intake.</li>
                <li>Rest and Recovery: Ensure adequate sleep and allow muscles to recover between workouts.</li>
            </ul>
        `;
    } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>Gaining 10-20 Pounds:</li>
                <li>For a more substantial weight gain, increase daily calorie intake by 500-1,000 calories.</li>
                <li>Total daily calorie intake: Approximately 2,800 to 3,500 calories.</li>
                <li>Protein: Maintain 1.2 to 1.7 grams per kilogram of body weight (e.g., 84 to 119 grams for a 70 kg person).</li>
            </ul>
            <ol>

                    <ul>
                        <li>Squats:
                            <ul>
                                <li>Rest: 60 seconds</li>
                        </li>
                        <li>Bench Press:
                            <ul>
                                <li>Rest: 60 seconds</li>
                        </li>
                        <li>Bent Over Rows:
                            <ul>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                    <ul>
                        <li>Deadlifts:
                                <li>Sets: 3</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                            <ul>
                                <li>Reps: 10-12</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                            <ul>
                                <li>Reps: 8-10</li>
                                <li>Rest: 60 seconds</li>
                            </ul>

                <li><strong>Day 4: Rest</strong></li>

                <li><strong>Day 5: Full Body Workout</strong>
                    <ul>
                        <li>Leg Press:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 12-15</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                        <li>Dumbbell Chest Flyes:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 12-15</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                        <li>Lat Pulldowns:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>Day 6-7: Rest</strong></li>
            </ol>

            <h3>Additional Tips:</h3>
            <ul>
                <li>Progressive Overload: Gradually increase the weight to ensure continued muscle growth.</li>
                <li>Nutrition: Consume a calorie surplus with a balanced diet focusing on protein intake.</li>
                <li>Rest and Recovery: Ensure adequate sleep and allow muscles to recover between workouts.</li>
            </ul>
        `;
    } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>For a more substantial weight gain, increase daily calorie intake by 500-1,000 calories.</li>
                <li>Total daily calorie intake can range from approximately 2,800 to 3,500.</li>
                <li>Protein: Maintain a protein intake of 1.2 to 1.7 grams per kilogram of body weight.</li>
                <li>Fat: Continue with a fat intake of approximately 20-35% of total daily calories. For a diet of 2,800 to 3,500 calories, this could be around 62 to 122 grams of fat per day.</li>

            <ul>
                    <ul>
                        <li>Reps: 8-12</li>
                        <li>Rest: 60-90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 60-90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-12</li>
                        <li>Rest: 60-90 seconds</li>
                    </ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 60 seconds</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Pull-Ups:
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Tricep Dips:
                    <ul>
                        <li>Sets: 3</li>
                </li>
                <li>Bicep Curls (Barbell or Dumbbell):
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 45 seconds</li>
                    </ul>
                </li>
                <li>Plank:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Duration: 60 seconds</li>
                        <li>Rest: 45 seconds</li>
                    </ul>
                </li>
            </ul>

            <h4>Cool Down:</h4>
            <p>Finish with a 5-10 minute cool down, including static stretches for major muscle groups.</p>

            <h4>Notes:</h4>
            <ul>
                <li>Adjust the weights used based on individual strength and gradually increase over time.</li>
                <li>Ensure proper form to prevent injuries.</li>
                <li>If possible, consult with a fitness professional to tailor the program to specific needs and ensure it aligns with individual fitness levels and any pre-existing conditions.</li>
            </ul>
        `;
    } else if (
        q1Answer === '25-34' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>For a more substantial weight gain, increase daily calorie intake by 500-1,000 calories.</li>
                <li>Total daily calorie intake can range from approximately 2,800 to 3,500.</li>
                <li>Protein: Maintain a protein intake of 1.2 to 1.7 grams per kilogram of body weight.</li>
                <li>Fat: Continue with a fat intake of approximately 20-35% of total daily calories. For a diet of 2,800 to 3,500 calories, this could be around 62 to 122 grams of fat per day.</li>

            <ul>
                    <ul>
                        <li>Reps: 8-12</li>
                        <li>Rest: 60-90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 60-90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-12</li>
                        <li>Rest: 60-90 seconds</li>
                    </ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 60 seconds</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Pull-Ups:
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Tricep Dips:
                    <ul>
                        <li>Sets: 3</li>
                </li>
                <li>Bicep Curls (Barbell or Dumbbell):
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 45 seconds</li>
                    </ul>
                </li>
                <li>Plank:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Duration: 60 seconds</li>
                        <li>Rest: 45 seconds</li>
                    </ul>
                </li>
            </ul>

            <h4>Cool Down:</h4>
            <p>Finish with a 5-10 minute cool down, including static stretches for major muscle groups.</p>

            <h4>Notes:</h4>
            <ul>
                <li>Adjust the weights used based on individual strength and gradually increase over time.</li>
                <li>Ensure proper form to prevent injuries.</li>
                <li>If possible, consult with a fitness professional to tailor the program to specific needs and ensure it aligns with individual fitness levels and any pre-existing conditions.</li>
            </ul>
        `;
    } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '3 times a week (45 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

            <ul>
                <li>Protein: About 1.2 to 1.6 grams per kilogram of body weight.</li>
                <li>Fat: About 20-35% of total daily calories.</li>
                <li>Protein Intake: Multiply your weight in kilograms by the recommended protein range. Example: If someone weighs 70 kg and aims for 1.6 g/kg, the daily protein intake would be 70 kg * 1.6 g/kg = 112 grams of protein.</li>
            </ul>
            <p>Workout Routine:</p>
            <h4>1. Warm-up (5-10 minutes):</h4>
                <li>Light cardio (jogging in place, jumping jacks)</li>
                <li>Dynamic stretches (arm circles, leg swings)</li>
            </ul>
            <ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 8-10</li>
                </li>
                <li>c. Bench Press:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Rest: 60 seconds</li>
                </li>
            </ul>
            <ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 12-15</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 12-15</li>
                <li>c. Dumbbell Rows:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
                <li>d. Lunges:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10 each leg</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
            </ul>

            <h4>4. Core Exercises:</h4>
            <ul>
                <li>a. Plank:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Duration: 30-60 seconds</li>
                        <li>Rest: 30 seconds</li>
                    </ul>
                </li>
                <li>b. Russian Twists:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 20 (10 each side)</li>
                        <li>Rest: 30 seconds</li>
                    </ul>
                </li>
            </ul>

            <h4>5. Cool Down (5-10 minutes):</h4>
            <ul>
                <li>Static stretches for major muscle groups (hamstrings, quadriceps, chest, shoulders, back)</li>
            </ul>

            <h3>Additional Tips:</h3>
            <ul>
                <li>Start with a weight that allows proper form, and gradually increase the weight as strength improves.</li>
                <li>Stay hydrated and maintain a balanced diet with a caloric surplus for weight gain.</li>
                <li>Adequate sleep is crucial for recovery and muscle growth.</li>
            </ul>
        `;
    } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

            <ul>
                <li>Protein: About 1.2 to 1.6 grams per kilogram of body weight.</li>
                <li>Fat: About 20-35% of total daily calories.</li>
                <li>Protein Intake: Multiply your weight in kilograms by the recommended protein range. Example: If someone weighs 70 kg and aims for 1.6 g/kg, the daily protein intake would be 70 kg * 1.6 g/kg = 112 grams of protein.</li>
            </ul>
            <p>Workout Routine:</p>
            <h4>1. Warm-up (5-10 minutes):</h4>
                <li>Light cardio (jogging in place, jumping jacks)</li>
                <li>Dynamic stretches (arm circles, leg swings)</li>
            </ul>
            <ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 8-10</li>
                </li>
                <li>c. Bench Press:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Rest: 60 seconds</li>
                </li>
            </ul>
            <ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 12-15</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 12-15</li>
                <li>c. Dumbbell Rows:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
                <li>d. Lunges:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10 each leg</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
            </ul>

            <h4>4. Core Exercises:</h4>
            <ul>
                <li>a. Plank:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Duration: 30-60 seconds</li>
                        <li>Rest: 30 seconds</li>
                    </ul>
                </li>
                <li>b. Russian Twists:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 20 (10 each side)</li>
                        <li>Rest: 30 seconds</li>
                    </ul>
                </li>
            </ul>

            <h4>5. Cool Down (5-10 minutes):</h4>
            <ul>
                <li>Static stretches for major muscle groups (hamstrings, quadriceps, chest, shoulders, back)</li>
            </ul>

            <h3>Additional Tips:</h3>
            <ul>
                <li>Start with a weight that allows proper form, and gradually increase the weight as strength improves.</li>
                <li>Stay hydrated and maintain a balanced diet with a caloric surplus for weight gain.</li>
                <li>Adequate sleep is crucial for recovery and muscle growth.</li>
            </ul>
        `;
    } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>To gain weight at a moderate pace, aim for a caloric surplus of about 250-500 calories per day.</li>
                <li>Daily Caloric Intake: Current Maintenance Calories + 250-500 calories</li>
                <li>Protein: About 1.2 to 1.6 grams per kilogram of body weight.</li>
                <li>Fat: About 20-35% of total daily calories.</li>

            <ol>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 75 seconds</li>
                    </ul>
                        <li>Reps: 10-12</li>
                        <li>Rest: 75 seconds</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Dumbbell Lunges:
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Barbell Curl:
                    <ul>
                        <li>Sets: 3</li>
                </li>
                <li>Tricep Dips:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 12-15</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
                <li>Plank:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Duration: 60 seconds</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
            </ol>

            <h4>Notes:</h4>
            <ul>
                <li>Perform each exercise with proper form, focusing on controlled movements.</li>
                <li>Start with a weight that challenges you within the specified rep range.</li>
                <li>Gradually increase the weight as your strength improves.</li>
                <li>Ensure a balanced diet with a calorie surplus to support weight gain.</li>
                <li>Stay hydrated and get adequate rest for recovery.</li>
            </ul>
        `;
    } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 5-10 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>To gain weight at a moderate pace, aim for a caloric surplus of about 250-500 calories per day.</li>
                <li>Daily Caloric Intake: Current Maintenance Calories + 250-500 calories</li>
                <li>Protein: About 1.2 to 1.6 grams per kilogram of body weight.</li>
                <li>Fat: About 20-35% of total daily calories.</li>

            <ol>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 75 seconds</li>
                    </ul>
                        <li>Reps: 10-12</li>
                        <li>Rest: 75 seconds</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Dumbbell Lunges:
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Barbell Curl:
                    <ul>
                        <li>Sets: 3</li>
                </li>
                <li>Tricep Dips:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 12-15</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
                <li>Plank:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Duration: 60 seconds</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
            </ol>

            <h4>Notes:</h4>
            <ul>
                <li>Perform each exercise with proper form, focusing on controlled movements.</li>
                <li>Start with a weight that challenges you within the specified rep range.</li>
                <li>Gradually increase the weight as your strength improves.</li>
                <li>Ensure a balanced diet with a calorie surplus to support weight gain.</li>
                <li>Stay hydrated and get adequate rest for recovery.</li>
            </ul>
        `;
    } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '3 times a week (45 minutes each)'
    ) {
        resultText = `
            Recommended Plan:
            <h3>First</h3>
                <li>Protein: About 1.6 to 2.2 grams per kilogram of body weight.</li>
                <li>Fat: About 20-35% of total daily calories.</li>
                <li>Protein Intake: Multiply weight in kilograms by the recommended protein range. (e.g., 1.6 g/kg for 70 kg = 112 grams)</li>
                <li>Fat Intake: Calculate the calorie contribution from fat. (e.g., 25% from 3000 calories = 83.3 grams of fat)</li>

                <li><strong>Workout Routine:</strong></li>
                <li><strong>1. Warm-up (5-10 minutes):</strong>
                        <li>Light cardio (jogging in place, jumping jacks)</li>
                        <li>Dynamic stretches (arm circles, leg swings)</li>
                    </ul>
                <li><strong>2. Compound Exercises:</strong>
                        <li>Squats:
                            <ul>
                                <li>Sets: 3</li>
                            </ul>
                        <li>Deadlifts:
                            <ul>
                                <li>Sets: 3</li>
                            </ul>
                        </li>
                        <li>Bench Press:
                            <ul>
                                <li>Sets: 3</li>
                        <li>Overhead Press:
                            <ul>
                                <li>Reps: 8-10</li>
                            </ul>
                        </li>

                    <ul>
                        <li>Bicep Curls:
                            <ul>
                                <li>Rest: 45 seconds</li>
                        </li>
                        <li>Tricep Dips:
                            <ul>
                            </ul>
                        </li>
                        <li>Dumbbell Rows:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                        <li>Lunges:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10 each leg</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>4. Core Exercises:</strong>
                    <ul>
                        <li>Plank:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Duration: 30-60 seconds</li>
                                <li>Rest: 30 seconds</li>
                            </ul>
                        </li>
                        <li>Russian Twists:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 20 (10 each side)</li>
                                <li>Rest: 30 seconds</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>5. Cool Down (5-10 minutes):</strong>
                    <ul>
                        <li>Static stretches for major muscle groups (hamstrings, quadriceps, chest, shoulders, back)</li>
                    </ul>
                </li>
            </ol>

            <h3>Additional Tips:</h3>
            <ul>
                <li>Start with a weight that allows proper form and gradually increase as strength improves.</li>
                <li>Stay hydrated and maintain a balanced diet with a caloric surplus for weight gain.</li>
                <li>Adequate sleep is crucial for recovery and muscle growth.</li>
            </ul>
        `;
    } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '1-6' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>Gaining 10-20 Pounds:</li>
                <li>Protein: About 1.6 to 2.2 grams per kilogram of body weight.</li>
                <li>Fat: About 20-35% of total daily calories.</li>
                <li>Protein Intake: Multiply weight in kilograms by the recommended protein range. (e.g., 1.6 g/kg for 70 kg = 112 grams)</li>
            </ul>
            <ol>

                    <ul>
                        <li>Light cardio (jogging in place, jumping jacks)</li>
                        <li>Dynamic stretches (arm circles, leg swings)</li>

                    <ul>
                        <li>Squats:
                            <ul>
                                <li>Rest: 60 seconds</li>
                        </li>
                        <li>Deadlifts:
                            <ul>
                                <li>Rest: 90 seconds</li>
                            </ul>
                        </li>
                        <li>Bench Press:
                            <ul>
                        </li>
                        <li>Overhead Press:
                                <li>Sets: 3</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                </li>
                <li><strong>3. Isolation Exercises:</strong>
                    <ul>
                        <li>Bicep Curls:
                                <li>Reps: 12-15</li>
                            </ul>
                        </li>
                        <li>Tricep Dips:
                                <li>Rest: 45 seconds</li>
                            </ul>
                        </li>
                        <li>Dumbbell Rows:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10-12</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                        <li>Lunges:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 10 each leg</li>
                                <li>Rest: 60 seconds</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>4. Core Exercises:</strong>
                    <ul>
                        <li>Plank:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Duration: 30-60 seconds</li>
                                <li>Rest: 30 seconds</li>
                            </ul>
                        </li>
                        <li>Russian Twists:
                            <ul>
                                <li>Sets: 3</li>
                                <li>Reps: 20 (10 each side)</li>
                                <li>Rest: 30 seconds</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><strong>5. Cool Down (5-10 minutes):</strong>
                    <ul>
                        <li>Static stretches for major muscle groups (hamstrings, quadriceps, chest, shoulders, back)</li>
                    </ul>
                </li>
            </ol>

            <h3>Additional Tips:</h3>
            <ul>
                <li>Start with a weight that allows proper form and gradually increase as strength improves.</li>
                <li>Stay hydrated and maintain a balanced diet with a caloric surplus for weight gain.</li>
                <li>Adequate sleep is crucial for recovery and muscle growth.</li>
            </ul>
        `;
    } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '3 times a week (45 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>For a more significant weight gain, aim for a caloric surplus of around 500-1000 calories per day.</li>
                <li>Daily Caloric Intake: Current Maintenance Calories + 500-1000 calories</li>
                <li>Protein: About 1.6 to 2.2 grams per kilogram of body weight.</li>
                <li>Fat: About 20-35% of total daily calories.</li>

            <ol>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 75 seconds</li>
                    </ul>
                        <li>Reps: 10-12</li>
                        <li>Rest: 75 seconds</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Dumbbell Lunges:
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Barbell Curl:
                    <ul>
                        <li>Sets: 3</li>
                </li>
                <li>Tricep Dips:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 12-15</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
                <li>Plank:
                    <ul>
                        <li>Sets: 3</li>
                        <li>Duration: 60 seconds</li>
                        <li>Rest: 60 seconds</li>
                    </ul>
                </li>
            </ol>

            <h4>Notes:</h4>
            <ul>
                <li>Perform each exercise with proper form, focusing on controlled movements.</li>
                <li>Start with a weight that challenges you within the specified rep range.</li>
                <li>Gradually increase the weight as your strength improves.</li>
                <li>Ensure a balanced diet with a calorie surplus to support weight gain.</li>
                <li>Stay hydrated and get adequate rest for recovery.</li>
            </ul>
        `;
    } else if (
        q1Answer === '35-44' &&
        q2Answer === 'Gain 10-20 pounds' &&
        q3Answer === '7-10' &&
        q4Answer === '4 times a week (60 minutes each)'
    ) {
        resultText = `
            Recommended Plan:

                <li>For a more significant weight gain, aim for a caloric surplus of around 500-1000 calories per day.</li>
                <li>Daily Caloric Intake: Current Maintenance Calories + 500-1000 calories</li>
                <li>Protein: About 1.6 to 2.2 grams per kilogram of body weight.</li>
                <li>Fat: About 20-35% of total daily calories.</li>

            <ol>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Reps: 8-10</li>
                        <li>Rest: 90 seconds</li>
                    </ul>
                    <ul>
                        <li>Sets: 3</li>
                        <li>Reps: 10-12</li>
                        <li>Rest: 75 seconds</li>
                    </ul>
                        <li>Reps: 10-12</li>
                        <li>Rest: 75 seconds</li>
                </li>
                    <ul>
                        <li>Sets: 3</li>
                    </ul>
                <li>Dumbbell Lunges:
                    
                        <li>Sets: 3</li>
                    
                Barbell Curl:
                    
                        Sets: 3
                
                Tricep Dips:
                    
                        Sets: 3</>
                        Reps: 12-15</li>
                        Rest: 60 seconds</li>

                Plank:
                        Sets: 3
                        Duration: 60 seconds
                        Rest: 60 seconds

            Notes:
                Perform each exercise with proper form, focusing on controlled movements.
                Start with a weight that challenges you within the specified rep range.
                Gradually increase the weight as your strength improves.
                Ensure a balanced diet with a calorie surplus to support weight gain.
                Stay hydrated and get adequate rest for recovery.
        `;
    } else {
        resultText = '<p>No specific plan available for the selected criteria.</p>';
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