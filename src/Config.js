
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
    no: [0,1,2]
},{
    name: ['main','main','main','main','main','main','main','main','main'], 
    no: [7,23,38,46,60,69,83,98]
},{
    name: ['brandcampaign','brandcampaign','brandcampaign'], 
    no: [5,15,23]
},{
    name: ['main','black_and_white','brandcampaign'],
    no: [2,27,86]
}];

for (let profile of importProfiles) {

    exportProfiles[profile.name] = {
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
        thumbnails: [],
        src: []
    };
    
    let value = displayValues[i];

    for (let i in value.no) {
        obj.thumbnails.push(exportProfiles[value.name[i]].thumbnails[value.no[i]]);
        obj.src.push(exportProfiles[value.name[i]].src[value.no[i]]);
    }

    exportProfiles[displayProfiles[i]] = {...obj};
}



export default exportProfiles;