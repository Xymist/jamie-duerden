'use strict';

angular.module('myApp.cvAccordion', []).controller('CVAccordionCtrl', function ($scope) { //Not actually an accordion. TODO: Move all this crap into JSON

    $scope.radio = {model :  undefined};

    $scope.jobGroups = [
        {
            employer: "Citizens' Advice Waverley",
            title: 'Project Technical Officer',
            dates: '(January 2015 - Current)',
            details: 'The Advice Services Transformation Fund project is funded by the Big Lottery, and has given money to many Citizens Advice offices and other charities across the UK. This particular instance of it was headed by Citizens Advice Waverley, in partnership with Waverley Borough Council. Several subprojects were spun off it: a training scheme for volunteers, moving CAW over to a thin client system, creating a website and network of charities to improve access to advice, installing touchscreen self-service advice terminals in various charities and GPs surgeries, and moving CAW over to a VoIP communications system.',
            details2: 'I played a significant part in the latter three, and was the initial source of the idea for the final (VoIP) part of the project. Over the course of this contract I have written wireframes, built the interface for the terminals, installed VoIP hardware, and been a key member of (indeed, for a short while managed) a multidisciplinary project team. I have greatly enhanced my communication skills, and gained significant appreciation for the role of a non-profit within a community and the unique circumstances they face.',
            details3: 'Most of the goals here were "soft" benefits surrounding access to advice and information for the community of Waverley, but the new telephone system in particular represents an expected 20% cost saving year-on-year, with the ability both to expand at very low cost, and potentially to offset costs further by providing communications to other organisations.'
        },
        {
            employer: "Maid in Sheffield",
            title: 'Technical Director ',
            dates: '(July 2014 - March 2015)',
            details: 'This was a business set up by myself and a friend as an experiment after university. I designed and built the website (it was my first major Ruby project), the code for which you can see in the Archived Projects section.',
            details2: 'I learned a number of things from this project, some of them to do with coding and web design, but also with business. Although I wasn\'t involved in the acquisition of human resources, I did oversee the payments and bookings system, and was responsible for maintaining the server and website which were the core of the business. ',
            details3: 'Quite aside from any other concerns, it was apparent by the time we wound up the business that advertising plays a far greater role than I had previously imagined; regardless of SEO, our highest return on any effort was with AdWords. I have thus resolved to budget accordingly for future projects; it is simply untrue (for a startup, anyway) that a great product needs no advertising.'
        },
        {
            employer: "Richard Royds Fine Wines Ltd",
            title: 'Technical Support ',
            dates: '(June 2010 - Current)',
            details: 'From developing my taste memory and food-matching skills in selling cheese and fine wines, to hosting and assisting with the hosting of wine tastings, through to establishing and maintaining the website, product database and stock control systems for the business, I have done a great deal of work for Richard over the last five years, on all sides of the business.',
            details2: 'I no longer have any regular hand in the retail side of the business, though I do still assist with hosting wine tastings. However, I remain the systems administrator, and have at this point constructed or installed all the computer hardware used on site.'
        }
    ];

    $scope.educationGroups = [
        {
            school: "University of Bath ",
            title: 'BSc Chemistry',
            dates: '(October 2011 - July 2014)',
            details: 'Second Class Honours, Second Division',
            details2: "While I began this degree with a great deal of enthusiasm, by Third Year it was clear that the course was not suited to my interests or my preferred focus of study."
        },
        {
            school: "Winchester College ",
            title: 'Kingsgate House',
            dates: '(September 2005 - July 2010)',
            details: 'Pre-U: Chemistry (D3), Physics (D3)',
            details2: 'A-Level: Biology (C)',
            details3: 'IGCSE: 9, grades A* - B, including A* Mathematics and English (Although really, if anyone cares about these at this point I shall be stunned)'
        }
    ];

    $scope.hobbyGroups = [
        {
            activity: "Sports",
            skillLevel: "Sports",
            details: "Skydiving: BPA A licence.",
            details2: "SCUBA Diving: PADI Open Water Diver. I don't get as much chance to indulge in this as I would like, since living in Britain precludes it (unless you happen to like diving with cold water and poor visibility, which I don't)."
        },
        {
            activity: "Coding",
            skillLevel: "Coding",
            details: "I only really took this up in earnest about eighteen months ago, after I left university. I started out with HTML and CSS, and then progressed from there. I don't currently intend to work as a programmer, but I am seeking work as a Program Manager, as I think it most closely matches my technical interests with my actual competencies.",
            details2: "Compiled languages: Haskell (moderate competence), D (low competence - I'm planning to abandon this and go to C++ as my imperative language, as Dlang is sufficiently minor as to be almost irrelevant)",
            details3: "Other: Javascript (with jQuery and Angular for web development), Ruby (mostly for Rails), Python, a very small amount of R. "
        }
    ];
});