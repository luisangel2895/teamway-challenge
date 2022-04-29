const allQuizzes = [
  {
    id: 'test-personality',
    name: 'Personality Test',
    type: 'Psichology',
    number: 1,
    image:
      'https://image.shutterstock.com/image-illustration/abstract-shape-psychological-test-board-260nw-182162528.jpg',
  },
  {
    id: 'test-math',
    name: 'Math Test',
    type: 'Math',
    number: 2,
    image:
      'https://www.creativefabrica.com/wp-content/uploads/2019/08/Math-test-with-a-B-580x386.jpg',
  },
];

const quizzes = [
  {
    id: 'test-personality',
    questions: [
      {
        id: '1',
        question:
          "You're really busy at work and a colleague is telling you their life story and personal woes. You:",
        alternatives: [
          {
            id: 'a',
            alternative: "Don't dare to interrupt them",
          },
          {
            id: 'b',
            alternative:
              "Think it's more important to give them some of your time; work can wait",
          },
          {
            id: 'c',
            alternative: 'Listen, but with only with half an ear',
          },
          {
            id: 'd',
            alternative:
              'Interrupt and explain that you are really busy at the moment',
          },
        ],
      },
      {
        id: '2',
        question:
          "You've been sitting in the doctor's waiting room for more than 25 minutes. You:",
        alternatives: [
          {
            id: 'a',
            alternative: 'Look at your watch every two minutes',
          },
          {
            id: 'b',
            alternative: 'Bubble with inner anger, but keep quiet',
          },
          {
            id: 'c',
            alternative:
              'Explain to other equally impatient people in the room that the doctor is always running late',
          },
          {
            id: 'd',
            alternative:
              'Complain in a loud voice, while tapping your foot impatiently',
          },
        ],
      },
      {
        id: '3',
        question:
          "You're having an animated discussion with a colleague regarding a project that you're in charge of. You:",
        alternatives: [
          {
            id: 'a',
            alternative: "Don't dare contradict them",
          },
          {
            id: 'b',
            alternative: 'Think that they are obviously right',
          },
          {
            id: 'c',
            alternative: 'Defend your own point of view, tooth and nail',
          },
          {
            id: 'd',
            alternative: 'Continuously interrupt your colleague',
          },
        ],
      },
      {
        id: '4',
        question: 'You are taking part in a guided tour of a museum. You:',
        alternatives: [
          {
            id: 'a',
            alternative:
              "Are a bit too far towards the back so don't really hear what the guide is saying",
          },
          {
            id: 'b',
            alternative: 'Follow the group without question',
          },
          {
            id: 'c',
            alternative: 'Make sure that everyone is able to hear properly',
          },
          {
            id: 'd',
            alternative:
              'Are right up the front, adding your own comments in a loud voice',
          },
        ],
      },
      {
        id: '5',
        question:
          'During dinner parties at your home, you have a hard time with people who:',
        alternatives: [
          {
            id: 'a',
            alternative: 'Ask you to tell a story in front of everyone else',
          },
          {
            id: 'b',
            alternative: 'Talk privately between themselves',
          },
          {
            id: 'c',
            alternative: 'Hang around you all evening',
          },
          {
            id: 'd',
            alternative: 'Always drag the conversation back to themselves',
          },
        ],
      },
      {
        id: '6',
        question:
          'You crack a joke at work, but nobody seems to have noticed. You:',
        alternatives: [
          {
            id: 'a',
            alternative: "Think it's for the best — it was a lame joke anyway",
          },
          {
            id: 'b',
            alternative: 'Wait to share it with your friends after work',
          },
          {
            id: 'c',
            alternative: 'Try again a bit later with one of your colleagues',
          },
          {
            id: 'd',
            alternative: 'Keep telling it until they pay attention',
          },
        ],
      },
      {
        id: '7',
        question: 'This morning, your agenda seems to be free. You:',
        alternatives: [
          {
            id: 'a',
            alternative:
              'Know that somebody will find a reason to come and bother you',
          },
          {
            id: 'b',
            alternative:
              'Heave a sigh of relief and look forward to a day without stress',
          },
          {
            id: 'c',
            alternative:
              "Question your colleagues about a project that's been worrying you",
          },
          {
            id: 'd',
            alternative:
              'Pick up the phone and start filling up your agenda with meetings',
          },
        ],
      },
      {
        id: '8',
        question:
          'During dinner, the discussion moves to a subject about which you know nothing at all. You:',
        alternatives: [
          {
            id: 'a',
            alternative:
              "Don't dare show that you don't know anything about the subject",
          },
          {
            id: 'b',
            alternative: 'Barely follow the discussion',
          },
          {
            id: 'c',
            alternative: 'Ask lots of questions to learn more about it',
          },
          {
            id: 'd',
            alternative: 'Change the subject of discussion',
          },
        ],
      },
      {
        id: '9',
        question:
          "You're out with a group of friends and there's a person who's quite shy and doesn't talk much. You:",
        alternatives: [
          {
            id: 'a',
            alternative:
              "Notice that they're alone, but don't go over to talk with them",
          },
          {
            id: 'b',
            alternative: 'Go and have a chat with them',
          },
          {
            id: 'c',
            alternative: 'Shoot some friendly smiles in their direction',
          },
          {
            id: 'd',
            alternative: 'Hardly notice them at all',
          },
        ],
      },
      {
        id: '10',
        question:
          'At work, somebody asks for your help for the hundredth time. You:',
        alternatives: [
          {
            id: 'a',
            alternative: 'Give them a hand, as usual',
          },
          {
            id: 'b',
            alternative: "Accept — you're known for being helpful",
          },
          {
            id: 'c',
            alternative: 'Ask them, please, to find somebody else for a change',
          },
          {
            id: 'd',
            alternative: "Loudly make it known that you're annoyed",
          },
        ],
      },
      {
        id: '11',
        question:
          "You've been see a movie with your family and the reviews are mixed. You:",
        alternatives: [
          {
            id: 'a',
            alternative: "Don't share your point of view with anyone",
          },
          {
            id: 'b',
            alternative:
              "Didn't like the film, but keep your views to yourself when asked",
          },
          {
            id: 'c',
            alternative: 'State your point of view with enthusiasm',
          },
          {
            id: 'd',
            alternative: 'Try to bring the others round to your point of view',
          },
        ],
      },
      {
        id: '12',
        question: 'A friend arrives late for your meeting. You:',
        alternatives: [
          {
            id: 'a',
            alternative:
              "Say, 'It's not a problem,' even if that's not what you really think",
          },
          {
            id: 'b',
            alternative:
              'Give them a filthy look and sulk for the rest of the evening',
          },
          {
            id: 'c',
            alternative:
              "Tell them, 'You're too much! Have you seen the time?'",
          },
          {
            id: 'd',
            alternative: 'Make a scene in front of everyone',
          },
        ],
      },
      {
        id: '13',
        question: "You can't find your car keys. You:",
        alternatives: [
          {
            id: 'a',
            alternative:
              "Don't want anyone to find out, so you take the bus instead",
          },
          {
            id: 'b',
            alternative:
              'Panic and search madly without asking anyone for help',
          },
          {
            id: 'c',
            alternative:
              "Grumble without telling your family why you're in a bad mood",
          },
          {
            id: 'd',
            alternative: 'Accuse those around you for misplacing them',
          },
        ],
      },
      {
        id: '14',
        question: "It's time for your annual appraisal with your boss. You:",
        alternatives: [
          {
            id: 'a',
            alternative:
              'Go with great hesitation as these sessions are torture for you',
          },
          {
            id: 'b',
            alternative:
              'Look forward to hearing what your boss thinks about you and expects from you',
          },
          {
            id: 'c',
            alternative:
              "Rehearse ad nauseam the arguments and ideas that you've prepared for the meeting",
          },
          {
            id: 'd',
            alternative:
              'Go along unprepared as you are confident and like improvising',
          },
        ],
      },
    ],
  },
  {
    id: 'test-math',
    questions: [
      {
        id: '1',
        question: 'what is 1 + 1',
        alternatives: [
          {
            id: 'a',
            alternative: '1',
          },
          {
            id: 'b',
            alternative: '2',
          },
          {
            id: 'c',
            alternative: '3',
          },
          {
            id: 'd',
            alternative: '4',
          },
        ],
      },
      {
        id: '2',
        question: 'what is 2 x 2',
        alternatives: [
          {
            id: 'a',
            alternative: '1',
          },
          {
            id: 'b',
            alternative: '2',
          },
          {
            id: 'c',
            alternative: '3',
          },
          {
            id: 'd',
            alternative: '4',
          },
        ],
      },
      {
        id: '3',
        question: 'what is 5 / 2',
        alternatives: [
          {
            id: 'a',
            alternative: '1',
          },
          {
            id: 'b',
            alternative: '2',
          },
          {
            id: 'c',
            alternative: '2.5',
          },
          {
            id: 'd',
            alternative: '3.5',
          },
        ],
      },
      {
        id: '4',
        question: 'what is 345 - 45',
        alternatives: [
          {
            id: 'a',
            alternative: '255',
          },
          {
            id: 'b',
            alternative: '300',
          },
          {
            id: 'c',
            alternative: '355',
          },
          {
            id: 'd',
            alternative: '200',
          },
        ],
      },
      {
        id: '5',
        question: 'what is 55 / 5',
        alternatives: [
          {
            id: 'a',
            alternative: '11',
          },
          {
            id: 'b',
            alternative: '10',
          },
          {
            id: 'c',
            alternative: '2',
          },
          {
            id: 'd',
            alternative: '6',
          },
        ],
      },
    ],
  },
];

const responses = [
  {
    quiz: 'test-personality',
    results: [
      {
        id: 'introvert',
        title: 'You are more of an introvert',
        text: `You feel that living alone is to live happily, and you prefer hiding in a crowd rather than standing out in one.

        You are perpetually tormented by the idea of doing things wrong, not understanding or not being alert enough or intelligent 
        enough to do what others expect of you. You lack in self-confidence and you seem to believe that others are better than you.
         While in a conversation, for example, you would be more likely to go along with the other's points of view as you don't fully 
         respect your own opinions. Where there's a low level task to complete or a service to be allotted, it's you who volunteers. 
         When people want to get out of a task, they naturally come to you as they know that you never say 'no'.

        It's not surprising that you sometimes have the impression of being permanently exploited, but you don't really know how to 
        break this vicious circle. On the rare occasions that you've tried to do so, this uncharacteristic defiance has caused uproar 
        and you've ended up backing down. You are afraid of contact with others as you imagine that they are constantly judging you and 
        that their probing looks will obviously find your faults. So, you try to remain the most transparent and discreet possible. How 
        far will you take this logic of self-denigration? Try and stop projecting onto others the bad image you have about yourself. 

        Have a good look around you and you'll see that they too have faults, weaknesses and shortcomings, so stop finding excuses for everything. 
        Maybe you were brought up in an atmosphere of 'You'll never make the grade' as a child — a poison that you need progressively to 
        get out of your system. Learn to look after your own interests — everyone else does, so why not you? You too have desires, dreams and 
        opinions — express them. If you think that by saying no or thinking differently from others that you will no longer be loved, it just isn't so. 
        Others will learn to respect you because you respect yourself.`,
      },
      {
        id: 'extrovert',
        title: 'You are more of a public introvert and private extrovert',
        text: `Within your circle of family and friends, you are completely at ease and it's often you who takes the lead to organise outings, dinners, 
        vacations, etc. However, as soon as you are in a public or professional setting you become rather inhibited. You don't feel in tune with what 
        you would qualify as agitation, rivalry or vainglory and this can sometimes appear to others as a kind of hidden criticism or a lack of ambition. 
        In fact, your pragmatic temperament helps you successfully manage problems as and when they arise. You aren't the kind to calculate your every 
        move and plan every inch of your life, and you find the sphere of family and friends to be much more gratifying to the professional sphere. You 
        are more expressive in emotional, sensorial and human terms and at home your organisation skills and capacity to oil the family wheels work well 
        and many of your family and friends appreciate your qualities and skills.

        At first glance, people find it hard to understand how you could be so comfortable organising your private life and then seem to lose the better 
        part of your self-confidence when you're in public. Maybe it's a question of rhythm? If you feel comfortable in your domestic rhythm it's perhaps 
        because it works more on a short-term basis (day, week or more rarely a month). On the contrary, the rhythm of professional life seems less concrete 
        and more distant as the professional agenda works more to quarterly or annual plans, that you have no control over. Is this the source of your lessened 
        motivation? You can't control all the cards so you have to adapt and, in fact, that doesn't interest you at all? If this difference between work and 
        home life doesn't bother you, then carry on. However, if you feel frustrated by this imbalance, it could be useful to look into the deeper reasons 
        (either on your own or with someone else) that keep you less focused on professional ambition. For instance, such reasons could be: a lack of thanks 
        and recognition, a fear of not being up to the mark… It's up to you to find out.`,
      },
    ],
  },
  {
    quiz: 'test-math',
    results: [
      {
        id: 'good',
        title: "You're a good in math",
        text: "You're a good in math, congratulations, few people have talent in math and you are a one, in the new update of the app we include quizzes of advanced math especialy for talent people like you.",
      },
      {
        id: 'bad',
        title: 'You need a more practice',
        text: 'You need a more practice, but you can improve in math,you just need to make tests every day in our platform, in in just 1 month you can become in a master in math.',
      },
    ],
  },
];

export { allQuizzes, quizzes, responses };
