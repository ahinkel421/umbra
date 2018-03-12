const QUESTIONS = [
	//  Question 0
	{
		text:
			"You’re walking along a candlelit, cobblestone street. Can’t remember how you got there, or where you’re going. You suddenly feel something sharp pressed against your lower back. You hear a voice. “Here’s what’s gunna happen. You’re gunna give me everything you got in those pockets, and then you’re gunna walk away...Got it?” What do you do?",
		answers: [
			{
				text: "Hand it over and keep walking, not worth the trouble.",
				goToQuestion: 1,
				statEffect: {
					strength: 0,
					speed: 0,
					intelligence: 3
				}
			},
			{
				text: "Try for a spinning elbow to knock them out.",
				goToQuestion: 2,
				statEffect: {
					strength: 3,
					speed: 2,
					intelligence: 1
				}
			},
			{
				text:
					"Pretend to reach for your pocket, grab their wrist instead, attempt to disarm them and run free.",
				goToQuestion: 3,
				statEffect: {
					strength: 1,
					speed: 3,
					intelligence: 2
				}
			},
			{
				text:
					"Convince them that you have friends in high places, watching him as you speak. That he's making a big mistake. (Lie)",
				goToQuestion: 4,
				statEffect: {
					strength: 0,
					speed: 0,
					intelligence: 6
				}
			}
		]
	},
	//Question 1
	{
		text: "This is question 1.",
		answers: [
			{
				text: "Hand it over and keep walking, not worth the trouble.",
				goToQuestion: 1,
				statEffect: {
					strength: 0,
					speed: 0,
					intelligence: 3
				}
			},
			{
				text: "Try for a spinning elbow to knock them out.",
				goToQuestion: 2,
				statEffect: {
					strength: 3,
					speed: 2,
					intelligence: 1
				}
			},
			{
				text:
					"Pretend to reach for your pocket, grab their wrist instead, attempt to disarm them and run free.",
				goToQuestion: 3,
				statEffect: {
					strength: 1,
					speed: 3,
					intelligence: 2
				}
			},
			{
				text:
					"Convince them that you have friends in high places, watching him as you speak. That he's making a big mistake. (Lie)",
				goToQuestion: 4,
				statEffect: {
					strength: 0,
					speed: 0,
					intelligence: 6
				}
			}
		]
	}
];

export default QUESTIONS;

//TODOS:
//Render answer components with a prop of question number, use that question number to access index of question/answers
//

//STYLING:
//“Pulvis et umbra sumus. (We are but dust and shadow.)” -Horace (fades in and then out)
//Umbra fades in, then "start game" button fades in.
