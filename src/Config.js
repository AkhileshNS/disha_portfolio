
const importProfiles = [
    { 
        name: 'black_and_white',
        conf: [1],
        last: ['3']
    },{ 
        name: 'main',
        conf: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13],
        last: ['','','','','','2','','','','','','',''] 
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
