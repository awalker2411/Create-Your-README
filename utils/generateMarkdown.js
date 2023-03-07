function renderLicenseBadge(license) {
    if(license === `No License`){
        return ``;
    } else {
        return `https://img.shields.io/badge/License-`+license+`-informational.svg`;
    }
}



function renderLicenseLink(license) {
    if(license === `No License`){
        return ``;
    } else if(license === 'Mozilla'){
        return `https://www.mozilla.org/en-US/MPL/`;
    } else if(license === 'GNU'){
        return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
    } else if(license === 'MIT'){
        return `https://opensource.org/license/mit/`;
    } else if(license === 'Apache'){
        return `https://www.apache.org/licenses/LICENSE-2.0`;
    } else if(license === 'BSD'){
        return `https://opensource.org/license/bsd-3-clause/`;
    }
}



function generateMarkdown(data) {
    return `
        # `+data.title+`
        
        ## Description
        <br>`+data.description+`
        
        ## Any Required Installations?
        <br>`+data.installations+`
        
        ## Usage
        <br>`+data.usage+`
        
        ## Tests
        <br>`+data.tests+`
        
        ## Live URL 
        <br>`+data.url+`

        ## Contributors
        <br>`+data.contributors+`

        ## Github Information
        <br>`+data.gitUser+`

        ## Contact Information
        <br>`+data.email+`

        ## License
        <br>`+data.license+`
        <br>`+renderLicenseBadge(data.license)+`
        <br>`+renderLicenseLink(data.license)+`
    `;
}
    


module.exports = generateMarkdown;