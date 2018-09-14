
const importProfiles = ['black_and_white','main','brandcampaign','shirtflirt'];
const exportProfiles = {};

const displayProfiles = ['shirtflirtdemo','portfoliodemo','clients','category'];
const displayValues = [{
    name: ['shirtflirt','shirtflirt','shirtflirt'], 
    no: [0,1,2]
},{
    name: ['main','main','main','main','main','main','main','main','main'], 
    no: [0,7,23,38,46,60,69,83,98]
},{
    name: ['brandcampaign','brandcampaign','brandcampaign'], 
    no: [5,15,23]
},{
    name: ['main','black_and_white','brandcampaign'],
    no: [2,27,86]
}];

for (let profile of importProfiles) {

    exportProfiles[profile] = {
        thumbnails: [],
        src: []
    };

    for (let j=1;j<=999;j++) {
        let pro = profile;
        if (profile==='main') {
            pro = 'portfolio';
        }
        try {
            exportProfiles[profile].thumbnails.push(require(`${__dirname}/assets/thumbnails/${pro}/${pro}_${j}.jpg`));
            exportProfiles[profile].src.push(require(`${__dirname}/assets/images/${pro}/${pro}_${j}.jpg`));
        } catch(error) {
            break;
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