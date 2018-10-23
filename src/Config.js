
const importProfiles = [
    { 
        name: 'black_and_white',
        conf: [1],
        last: ['3']
    },{ 
        name: 'main',
        conf: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        last: ['','','','','','2','','','','','','','','','','','','','',''],
        titles: ['Title1','Title2','Title3','Title4','Title5','Title6','Title7','Title8','Title9','Title10','Title11','Title12','Title13',
        'Title14','Title15','Title16','Title17','Title18','Title19','Title20'] 
    },{ 
        name: 'brandcampaign',
        conf: [1],
        last: [''] 
    },{ 
        name: 'shirtflirt',
        conf: [1],
        last: ['']
    }
];

const exportProfiles = {};

const displayProfiles = ['shirtflirtdemo','portfoliodemo','portraits','category'];
const displayValues = [{
    name: ['shirtflirt','shirtflirt','shirtflirt'], 
    keys: [1,1,1],
    no: [1,2,3]
},{
    name: ['main','main','main','main','main','main','main','main','main'],
    keys: [1,2,3,4,5,6,7,8,9], 
    no: [1,1,1,1,1,1,1,1,1]
},{
    name: ['black_and_white','black_and_white','black_and_white','black_and_white','black_and_white','black_and_white','black_and_white','black_and_white','black_and_white'], 
    keys: [1,1,1,1,1,1,1,1,1],
    no: [10,2,13,4,5,6,7,8,9]
},{
    name: ['main','black_and_white','shirtflirt'],
    keys: [1,1,1],
    no: [3,28,2]
}];

for (let profile of importProfiles) {

    exportProfiles[profile.name] = {
        keys: [],
        thumbnails: [],
        src: [],
        last: profile.last
    };

    if ('titles' in profile) {
        exportProfiles[profile.name]['titles'] = profile.titles;
    }

    for (let folder of profile.conf) {

        for (let j=1;j<999;j++){
            let pro = profile.name;
            if (profile.name==='main') {
                pro = 'portfolio';
            }
            try {
                exportProfiles[profile.name].thumbnails.push(require(`./assets/thumbnails/${pro}/${folder}/${j}.jpg`));
                exportProfiles[profile.name].src.push(`public2/${pro}/${folder}/${j}.jpg`);
                exportProfiles[profile.name].keys.push(folder);
            } catch(error) {
                break;
            }
        }
    }

}

for (let i in displayProfiles) {
    let obj = {
        thumbnails: []
    };
    
    let value = displayValues[i];

    for (let i in value.no) {
        let pro = value.name[i];
        if (pro==='main') {
            pro = 'portfolio';
        }
        obj.thumbnails.push(require(`./assets/thumbnails/${pro}/${value.keys[i]}/${value.no[i]}.jpg`));
    }

    exportProfiles[displayProfiles[i]] = {...obj};
}

export default exportProfiles;

// Texts

let texts = {
    Home: {
        titles: ['#ShirtFlirtByDishaKhanted','Themed Gallery','Monochrome Gallery']
    },
    Portfolio: {
        titles: ['Themed Gallery','Monochrome Gallery','#ShirtFlirtByDishaKhanted'],
        descs:[
            '',
            '',
            ''
        ]
    },
    About: {
        title: 'Disha Khanted',
        descs: [
            'Photographer Disha Khanted spent the last couple of years photographing landscapes and people, when she found that her passion lies in portrait and fashion photography. It all began when she simply grabbed the camera lying in her home, and ventured out to shoot anything and everything that could be captured through a camera lens.',
            'Starting off with small count of followers, the number has risen exponentially over a span of 2 years. Not only does she play the role of a photographer, but also the roles of an editor and a stylist. She is also self taught in the techniques of lighting, angles and settings.',
            'Her network contains an extensive web of contacts with models, make-up artists and stylists. Disha now does freelance photo-shoots and also works with designers and models in Bangalore.'
        ]
    }
}

export {texts};