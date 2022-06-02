# sign-up

A sign up page that urges the user to sign up! Contains a form for user input data which is validated via Javascript. 

## Mobile friendly

The page is responsive and mobile friendly at less than 800 pixels width. To do this I took advantage of clamping font-size and media query(ing) the screen size to apply custom CSS. The intial left background image on desktop only appears on the left, in mobile it becomes the entire page background which I quite like. 

## Form validation 

Instead of validataing with the browser I decided to validate with Javascript as it allowed to me to customise error messages for a better UX. When the user enters valid information the input box is styled with a green border, if they enter invalid data (incorrectly formatted or not abiding by html pattern) the correct error message is shown just below the input box aswell as a red border that styles the input. This indicates clearly what is wrong and how to easily fix it. 

When the user is focused on an input a neutral blue border is applied. I used the "change" event lisener to only validate/apply CSS/show error after the user clicks off the input box, this is fair to the user and doesn't give them an error before they are finished. 


### How it went

Overall I am quite satisfied with this project, it was rewarding creating a responsive form that has real application. I also learned a lot about media query and checking the screen size allow to make mobile friendly sites. The most difficult thing this whole project was alinging flexbox div's, I had misplaced one single /div that stumped me for 2 hours! But hey, I'm sure I'm not the first for it to happen to. 

Not completely pleased with the logo font, but this wasn't a focus point of the page.
Things I plan to add:
- Better support for 800-1100 width range.
