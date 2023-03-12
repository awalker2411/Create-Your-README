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
        
        `+data.description+`
        
        ## Any Required Installations?
        
        `+data.installations+`
        
        ## Usage
        
        `+data.usage+`
        
        ## Tests
        
        `+data.tests+`
        
        ## Live URL 
        
        `+data.url+`

        ## Contributors
        
        `+data.contributors+`

        ## Github Information
        
        `+data.gitUser+`

        ## Contact Information
        
        `+data.email+`

        ## License
        `+data.license+`
        
        `+renderLicenseBadge(data.license)+`
        
        `+renderLicenseLink(data.license)+`
    `;
}
    


module.exports = generateMarkdown;
