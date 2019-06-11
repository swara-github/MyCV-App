Template.skills.helpers({
    skillsData: function()
    {
        let skillsData = Resume.findOne({firstName:"Swaranjali"});
        return skillsData && skillsData.skills;
    }
/*     [{
            text: "Mobile-First, Responsive Design"
        },
        {
            text: "Cross Browser Testing & Debugging"
        },
        {
            text: "Cross Functional Teams"
        },
        {
            text: "Agile Development & Scrum"
        }


    ] */


});