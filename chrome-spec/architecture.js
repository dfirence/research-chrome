/**
 * Learning about Chrome Extensions - Notes
 * 
 * Author   :  dfirence@
 * Usage    :  DO NOT use these in production, these are research notes
 * Purpose  :  Understand specific API syntax & structure
 */

//-----------------------------------------------------------------------
// MANIFEST FILE
//-----------------------------------------------------------------------


/**
 *  Template URL:
 *      https://developer.chrome.com/extensions/manifest
 */

/** 
    {
    // REQUIRED FIELDS
        "manifest_verison"  :   2
        "name"              :   // My Extension's name here
        "version"           :   // My Extension's version - diff from manifest_version

    // OPTIONAL
        "author"            :   // My Name
        "description"       :   // My Extension's description here
        "default_locale"    :   // My localized language - e.g., 'en'
        "icons"             :   // My Custom icons - 16x16, 48x48,. 128x128

    }
*/

// Realworld ACME Manifest without browser_actions or page_actions
{
    "manifest_version": 2,
    "version": "1.0",
    "name": "My ACME Extension",
    "author": "jdoe@",
    "description": "Greets me daily",
    "default_locale": "en"
}