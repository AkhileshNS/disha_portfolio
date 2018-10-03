
const importProfiles = [
    { 
        name: 'black_and_white',
        conf: ['1-n']
    },{ 
        name: 'main',
        conf: ['1-n'] 
    },{ 
        name: 'brandcampaign',
        conf: ['1-n'] 
    },{ 
        name: 'shirtflirt',
        conf: ['1-n']
    }
];

const exportProfiles = {};

const displayProfiles = ['shirtflirtdemo','portfoliodemo','clients','category'];
const displayValues = [{
    name: ['shirtflirt','shirtflirt','shirtflirt'], 
    no: [1,2,3]
},{
    name: ['main','main','main','main','main','main','main','main','main'], 
    no: [8,24,39,47,61,70,84,99,112]
},{
    name: ['brandcampaign','brandcampaign','brandcampaign'], 
    no: [6,16,24]
},{
    name: ['main','black_and_white','brandcampaign'],
    no: [3,28,87]
}];

for (let profile of importProfiles) {

    exportProfiles[profile.name] = {
        keys: [],
        thumbnails: [],
        src: []
    };

    for (let conf of profile.conf) {

        let vals,start,end;

        vals = conf.split("-");
        start = parseInt(vals[0], 10);
        end = (vals[1]==='n') ? 999 : parseInt(vals[1], 10);

        console.log(start + '-' + end);

        for (let j=start;j<=end;j++) {
            let pro = profile.name;
            if (profile.name==='main') {
                pro = 'portfolio';
            }
            try {
                exportProfiles[profile.name].keys.push(j);
                exportProfiles[profile.name].thumbnails.push(require(`./assets/thumbnails/${pro}/${pro}_${j}.jpg`));
                exportProfiles[profile.name].src.push(`public/${pro}/${pro}_${j}.jpg`);
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
        obj.thumbnails.push(require(`./assets/thumbnails/${pro}/${pro}_${i}.jpg`));
    }

    exportProfiles[displayProfiles[i]] = {...obj};
}



export default exportProfiles;