var postsData = [
{
title: 'Django',
author: 'Jacob Kapalan Moss'
},
{
title: 'Meteor',
author: 'Geoff Schmidt'
},
{
title: 'Ruby on Rails',
author: 'DHH'
}
];
Template.roomsList.helpers({
rooms: postsData
});
