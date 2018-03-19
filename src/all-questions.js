const QUESTIONS = [
	//  Question 0
	{
		text:
			"You’re walking along a candlelit, cobblestone street. Can’t remember how you got there, or where you’re going. You suddenly feel something sharp pressed against your lower back. You hear a voice. “Here’s what’s gunna happen. You’re gunna give me everything you got in those pockets, and then you’re gunna walk away...Got it?” What do you do?",
		answers: [
			{
				text: "Hand it over and keep walking. Not worth the trouble.",
				goToQuestion: 1,
				statEffect: {
					strength: 0,
					speed: 0,
					intelligence: 3
				}
			},
			{
				text:
					"Try for a spinning elbow. You've fought your way out of worse.",
				goToQuestion: 2,
				statEffect: {
					strength: 3,
					speed: 2,
					intelligence: 1
				}
			},
			{
				text:
					"Pretend to reach for your pocket and attempt to disarm them instead.",
				goToQuestion: 3,
				statEffect: {
					strength: 1,
					speed: 3,
					intelligence: 2
				}
			},
			{
				text: "Keep your cool and try to talk your way out of it.",
				goToQuestion: 4,
				statEffect: {
					strength: 0,
					speed: 0,
					intelligence: 6
				}
			}
		]
	},

	//Question 1 (response)
	{
		text:
			"You hand over the little money you have. The thief shoves you to the ground and runs away. You get up, brush yourself off and head home.",
		goToQuestion: 5
	},

	//Question 2 (response)
	{
		text:
			"Spinning with full force, you crack the thief in the right temple with the point of your elbow. Their knees buckle and they drop to the ground. Out cold. You quickly make your escape before they come to.",
		goToQuestion: 5
	},

	//Question 3 (response)
	{
		text:
			"Slowly, you reach down to your right pocket. You nimbly grab the thief's wrist and twist as hard as you can. You feel a sudden *snap*, the thief cries out in pain and drops the knife. Before they have a chance to react, you make a run for it.",
		goToQuestion: 5
	},

	//Question 4 (response)
	{
		text:
			"\"You're making a big mistake, pal. I've got friends with eyes on you as we speak. Walk. Away.\" After a moment of silent deliberation, the sharp instrument is pulled away and you hear quick, receading footsteps. Thank goodness for your imaginary friends...",
		goToQuestion: 5
	},

	//Question 5
	{
		text: "it's working!",
		answers: [
			{
				text: "is it really?"
			},
			{
				text: "Yeah I think so"
			},
			{
				text: "Are you sure?"
			},
			{
				text: "We'll find out!"
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
