// ── ISSUES DATABASE ────────────────────────────────────────────────────────
const ISSUES = [
  {
    id: 1, category: "docs", icon: "📄",
    title: "Provider Cannot Open or Upload Documents",
    description: "Documents won't open, downloads are blocked, or uploads fail.",
    keywords: [
      "upload", "document", "file", "open document", "cannot upload", "cant upload",
      "upload fail", "upload not working", "wont upload", "download blocked",
      "sharepoint", "pdf", "docx", "attachment", "vpn", "security restriction",
      "organization block", "wont open", "file not opening", "cannot open",
      "upload issue", "file upload", "file type", "wrong format", "headshot",
      "document blocked", "download not working", "file blocked", "cant open document"
    ],
    email: {
      subject: "Troubleshooting Your Document Upload Issue",
      body: `Hi [Provider Name],

Thank you for reaching out! Here are a few steps to help resolve the issue with opening or uploading documents:

1. Try using Google Chrome, as it resolves most upload and access issues.
2. Clear your browser cache and try again.
3. If you are connected to a VPN, please disconnect temporarily and retry the upload.
4. Try from a different device or network if the issue continues.

Please note: documents must be in .pdf or .docx format. Headshots should be in .jpg, .png, or another accepted image format.

If you are still experiencing issues after trying these steps, please reply and we will escalate for further review.

[Your Name]`
    }
  },
  {
    id: 2, category: "email", icon: "✉️",
    title: "Provider Not Receiving LTOE/Portal Emails (Codes, Links)",
    description: "Provider is not receiving LTOE login codes, portal verification emails, or system emails from LT_OnlineServices. Not for Kimedics invites — see Kimedics Invitation issue for that.",
    keywords: [
      "not receiving email", "no email", "missing email",
      "verification code", "login code", "code", "spam", "junk folder",
      "junk", "lt_onlineservices", "onlineservices", "code not received",
      "not getting email", "email not arriving", "never received", "didnt receive",
      "resend code", "not getting code", "email not coming", "missing code",
      "not receiving login", "no verification", "portal email", "ltoe email",
      "ltoe invite", "portal invite", "not getting portal", "no portal email"
    ],
    email: {
      subject: "Action Required: Check Spam Folder for LocumTenens Emails",
      body: `Hi [Provider Name],

Thank you for reaching out! If you are not receiving emails from us, please take the following steps:

1. Check your Spam or Junk folder for emails from LT_OnlineServices@locumtenens.com.
2. Search your inbox for "LT_OnlineServices" to locate any filtered messages.
3. Add LT_OnlineServices@locumtenens.com to your safe sender list to ensure future emails are delivered.

Once you have checked, please let us know and we can resend your invite or verification code if needed.

Please don't hesitate to reach out if you have any questions!

[Your Name]`
    }
  },
  {
    id: 3, category: "portal", icon: "🔍",
    title: "Clinician Portal Verification Confusion",
    description: "Provider believes they are credentialed or invited but cannot proceed.",
    keywords: [
      "portal verification", "clinician portal", "verified account", "already invited",
      "cannot proceed", "invited but cant", "invite only", "think they are credentialed",
      "believe they are credentialed", "portal verified", "account verified",
      "lt online experience", "lt online invite", "online experience",
      "verification confusion", "invited but not credentialed", "why cant they proceed",
      "sent invite but", "provider says they verified", "already verified"
    ],
    email: {
      subject: "Next Steps to Begin Your Credentialing Application",
      body: `Hi [Provider Name],

Thank you for completing your account verification! Just to clarify: the invite you received was to verify your account only. It does not start your credentialing application.

To begin your credentialing application, please follow these steps:

1. Log in at www.locumtenens.com.
2. Click CREDENTIALS from the top navigation.
3. Select Credentialing Overview.
4. Follow the prompts to be redirected to your credentialing application in Axuall.

Please don't hesitate to reach out if you have any questions!

[Your Name]`
    }
  },
  {
    id: 4, category: "mobile", icon: "📱",
    title: "Mobile Credentialing Error (\"Something Is Definitely Broken\")",
    description: "Provider gets a broken error message when trying to credential on a mobile device.",
    keywords: [
      "mobile", "phone", "cell phone", "iphone", "android", "smartphone",
      "something is broken", "something is definitely broken", "oh no something",
      "broken on mobile", "mobile error", "credentialing on phone", "phone error",
      "tablet", "mobile device", "mobile compatibility", "error on phone",
      "broken message", "oh no", "definitely broken", "error message phone"
    ],
    email: {
      subject: "Action Required: Use This Link to Access Credentialing on Mobile",
      body: `Hi [Provider Name],

Thank you for reaching out! If you are seeing an error message on your phone while trying to access your credentialing application, this is a known compatibility issue with mobile browsers.

To access your credentialing application on a mobile device, please use this direct link:
https://portal.locumtenens.com/#/credentials/overview

For the best experience, we recommend completing your credentialing application on a desktop or laptop computer when possible.

Please don't hesitate to reach out if you need further assistance!

[Your Name]`
    }
  },
  {
    id: 5, category: "login", icon: "🔒",
    title: "Incorrect Username / Password or Locked Account",
    description: "Provider cannot log in due to incorrect credentials or a locked account.",
    keywords: [
      "password", "forgot password", "reset password", "wrong password",
      "incorrect password", "locked", "locked out", "account locked", "lock",
      "cannot log in", "cant log in", "login error", "sign in error",
      "wrong credentials", "password error", "username error", "locked account",
      "30 minutes", "unlock account", "cant sign in", "cannot sign in",
      "login not working", "login failed", "sign in failed", "password not working",
      "wrong username", "incorrect username", "cant access account", "locked out of account"
    ],
    email: {
      subject: "Action Required: Reset Your Password to Regain Access",
      body: `Hi [Provider Name],

Thank you for reaching out! Here is how to reset your password and regain access to your account:

1. Go to www.locumtenens.com and click Log In.
2. Click "Forgot your password?"
3. Enter the email address associated with your account.
4. Enter the verification code sent to your email.
5. Create a new password following the requirements listed on the page.
6. Log in with your new password.

Please note: if your account is locked, resetting your password will automatically unlock it. You may also wait 30 minutes for the lock to clear on its own.

Please don't hesitate to reach out if you need further assistance!

[Your Name]`
    }
  },
  {
    id: 6, category: "portal", icon: "🗂️",
    title: "Missing Credentials Tab in LTOE",
    description: "Provider cannot see the Credentials tab in their LTOE account.",
    keywords: [
      "credentials tab", "missing tab", "no credentials tab", "cant see credentials",
      "credentials not showing", "credentials tab missing", "credentials tab gone",
      "tab missing", "username mismatch", "email mismatch", "ltoe username",
      "username doesnt match", "username not matching", "missing credentials",
      "credentials tab not appearing", "credentials not visible", "no credentials",
      "credentials tab not there", "where is credentials tab",
      "credentials tab disappeared", "tab not showing", "cant find credentials"
    ],
    email: {
      subject: "Troubleshooting Your Missing Credentials Tab",
      body: `Hi [Provider Name],

Thank you for reaching out! If the Credentials tab is not appearing in your account, this is typically caused by one of the following:

- Your account has not yet been verified through the LT Online Experience invitation
- There may be a mismatch between your login email and your account username

Our team is reviewing your account. In the meantime, please ensure you have completed the account verification step using the invite sent to your email on file.

We will follow up as soon as we have an update. Please don't hesitate to reach out with any questions!

[Your Name]`
    }
  },
  {
    id: 7, category: "cred", icon: "📋",
    title: "How to Access the Credentialing Application",
    description: "Step-by-step guide for providers to access their credentialing application via LTOE and Axuall.",
    keywords: [
      "access credentialing", "credentialing application", "begin credentialing",
      "start credentialing", "get started credentialing", "npi", "npi number",
      "credentialing overview", "how to credential", "credential application",
      "how to access axuall", "get into axuall", "axuall redirect", "authenticate",
      "authenticate account", "authentication", "how to start credentialing",
      "credentialing link", "access credentials", "open credentialing",
      "begin credentials", "provider portal access", "cant start credentialing",
      "how do they start", "where do they go to credential"
    ],
    email: {
      subject: "How to Access Your Credentialing Application",
      body: `Hi [Provider Name],

Thank you for reaching out! Here are the steps to access your credentialing application:

1. Log in at www.locumtenens.com using the email address on file.
2. Click the Log In button.
3. Click CREDENTIALS from the top navigation menu.
4. Select Credentialing Overview.
5. You will see a prompt to verify your NPI and click Get Started, or click "Authenticate your account."
6. You will then be automatically redirected to your credentialing application in Axuall.

If the redirect does not happen after clicking, it is most likely due to pop-up blockers, especially in Safari on Mac, iPhone, and iPad. To resolve this:

- We recommend switching to Google Chrome for the best experience.
- If you prefer Safari, you can disable the pop-up blocker to allow the redirect:
  • How to Allow Pop-ups in Chrome: https://support.google.com/chrome/answer/95472
  • How to Allow Pop-ups in Safari (Mac, iPhone & iPad): https://support.apple.com/guide/safari/sfri40696/mac

Once pop-ups are allowed for locumtenens.com, click the button on the Credentials page and it should redirect you to your credentialing application.

Additional troubleshooting tips:
- Clear your browser cache if the page is slow, blank, or looping
- Make sure third-party cookies are enabled in your browser settings
- Try a different device if the issue continues

Please don't hesitate to reach out if you have any questions!

[Your Name]`
    }
  },
  {
    id: 8, category: "mobile", icon: "🍪",
    title: "Authenticate Button Not Working / Axuall Won't Load",
    description: "Provider is likely blocked by a pop-up blocker, most often on Safari.",
    keywords: [
      "authenticate button", "authenticate button not working", "nothing happens",
      "click authenticate", "button not working", "button doesnt work",
      "pop-up blocker", "popup blocker", "pop up blocker", "popups", "pop ups",
      "third party cookies", "third-party cookies", "cookies blocked", "cookies disabled",
      "enable cookies", "allow cookies", "new tab blocked", "redirect blocked",
      "axuall wont load", "axuall not loading", "cant get into axuall",
      "axuall not opening", "axuall wont open", "blank page axuall",
      "axuall blank", "axuall page not loading", "wont redirect",
      "redirect not working", "stuck on authenticate", "authenticate does nothing",
      "nothing happens when i click", "click and nothing happens", "button click nothing",
      "axuall blocked", "allow popups", "allow pop ups", "axuall isnt opening",
      "axuall doesnt open", "cant access axuall", "provider cant get into axuall",
      "safari", "safari blocked", "safari popup"
    ],
    email: {
      subject: "Action Required: Enable Popups to Access Your Credentialing Application",
      body: `Hi [Provider Name],

Thank you for reaching out! If the redirect to your credentialing application isn't happening, it's likely due to pop-up blockers in browsers like Safari on Mac, iPhone, and iPad.

To resolve this, we recommend using Google Chrome. If you prefer Safari, you can disable the pop-up blocker using the steps below:

- How to Allow Pop-ups in Chrome: https://support.google.com/chrome/answer/95472
- How to Allow Pop-ups in Safari (Mac, iPhone & iPad): https://support.apple.com/guide/safari/sfri40696/mac

Once pop-ups are allowed for locumtenens.com, click the button on the Credentials page and it should redirect you to your credentialing application.

Please don't hesitate to reach out if you need further assistance!

[Your Name]`
    }
  },
  {
    id: 9, category: "cred", icon: "🔄",
    title: "How to Re-Credential",
    description: "Guide for providers to access their re-credentialing application through LTOE and Axuall.",
    keywords: [
      "re-credential", "re credential", "recredential", "re-cred", "recred",
      "credentialing again", "renewal", "start re-credentialing",
      "re-credentialing application", "redo credentialing", "credential renewal",
      "re cred", "start re credentialing", "how to re-credential",
      "re credentialing", "renew credentials", "credential again", "recredentialing"
    ],
    email: {
      subject: "How to Start Your Re-Credentialing Application",
      body: `Hi [Provider Name],

Thank you for reaching out! Here are the steps to begin your re-credentialing application:

1. Log in at www.locumtenens.com using the email address on file.
2. Click the Log In button.
3. Click CREDENTIALS from the top navigation menu.
4. Select Credentialing Overview.
5. Click "Start my re-credentialing application."
6. You will be automatically redirected to your re-credentialing application in Axuall.

If the redirect does not happen, it is most likely due to pop-up blockers, especially in Safari on Mac, iPhone, and iPad. To resolve this:

- We recommend switching to Google Chrome for the best experience.
- If you prefer Safari, you can disable the pop-up blocker:
  • How to Allow Pop-ups in Chrome: https://support.google.com/chrome/answer/95472
  • How to Allow Pop-ups in Safari (Mac, iPhone & iPad): https://support.apple.com/guide/safari/sfri40696/mac

Additional troubleshooting tips:
- Clear your browser cache if the page is slow, blank, or looping
- Make sure third-party cookies are enabled in your browser settings
- Try a different device if the issue continues

Please don't hesitate to reach out if you have any questions!

[Your Name]`
    }
  },
  {
    id: 10, category: "axuall", icon: "🪪",
    title: "Axuall Identity Verification Error",
    description: "Provider cannot complete identity verification in Axuall.",
    keywords: [
      "identity verification", "verify identity", "identity failed",
      "verification failed", "unable to verify", "name mismatch", "name doesnt match",
      "wrong name", "dob", "date of birth", "ssn", "social security",
      "social security number", "government id", "id mismatch",
      "stuck on verification", "looped back", "identity error", "verification loop",
      "axuall identity", "axuall verification", "888-298-1730", "axuall support",
      "identity check failed", "we were unable to verify", "identity verification failed",
      "middle name", "maiden name", "suffix", "hyphenated name",
      "wrong dob", "wrong ssn", "cant proceed identity", "keeps looping", "looping back"
    ],
    email: {
      subject: "Action Required: Contact Axuall Support for Identity Verification",
      body: `Hi [Provider Name],

Thank you for reaching out! We understand you are experiencing an issue with the identity verification step in your credentialing application.

Because this step involves sensitive personal information, it must be resolved directly with Axuall Support. Please contact them at your earliest convenience:

Axuall Support: 888-298-1730

Common reasons for identity verification issues include a name discrepancy between what was entered and your government-issued ID, or an incorrect date of birth or Social Security Number.

Axuall Support is the only party authorized to assist with identity verification and can securely correct your information.

Please don't hesitate to reach out if you have any additional questions!

[Your Name]`
    }
  },
  {
    id: 11, category: "docs", icon: "🗃️",
    title: "Document Library — How It Works",
    description: "Understanding the Document Library and why uploaded documents may not appear in Axuall.",
    keywords: [
      "document library", "library", "documents not appearing", "uploaded but not showing",
      "documents not in axuall", "where to upload documents", "upload after credentialing",
      "documents missing from axuall", "library not working", "documents disappeared",
      "doc library", "documents not showing", "uploaded document missing",
      "cant find documents", "where did documents go", "documents not visible",
      "upload location", "where to upload", "documents not found",
      "document not in axuall", "cant access document library"
    ],
    email: {
      subject: "Information About Uploading Documents to the Document Library",
      body: `Hi [Provider Name],

Thank you for reaching out! The Document Library is available for uploading additional documents after your credentialing application has been fully completed in Axuall.

If you have not yet completed your credentialing application, please do so first:

1. Log in at www.locumtenens.com.
2. Click CREDENTIALS from the top navigation.
3. Select Credentialing Overview and follow the prompts to complete your application in Axuall.

Once your credentialing application is complete, the Document Library will be accessible for any additional uploads.

Please don't hesitate to reach out if you have any questions!

[Your Name]`
    }
  },
  {
    id: 12, category: "axuall", icon: "🤖",
    title: "Axuall Fields Not Pre-Populating",
    description: "Provider reports that information is not auto-filling in their Axuall credentialing application.",
    keywords: [
      "auto populate", "auto-populate", "pre-populate", "pre populate",
      "not filling in", "fields empty", "information not filling", "blank fields",
      "not auto filling", "manual entry", "axuall not pre-populating",
      "why isnt filling", "wont pre-populate", "fields not populating",
      "information not pre-populating", "nothing pre-fills", "not autofilling",
      "data not filling", "why is it blank", "fields blank", "not auto populated",
      "why arent fields filled", "information missing from application"
    ],
    email: {
      subject: "Information About Your Credentialing Application Fields",
      body: `Hi [Provider Name],

Thank you for reaching out! Some fields in your credentialing application will auto-populate from verified databases after identity verification, while others need to be entered manually.

Fields that typically auto-populate:
- State licenses, expiration dates, and board certifications
- DEA (when applicable), NPI, name, and date of birth

Fields that must be entered manually:
- Personal contact information (phone number, address)
- Attestation questions (disciplinary history, prior convictions)
- Malpractice history or explanations
- Any narrative or explanation fields

Please review and complete any remaining fields in your application. If primary source data is still missing after completing identity verification, please reply to this email and we will look into it further.

[Your Name]`
    }
  },
  {
    id: 13, category: "axuall", icon: "⏱️",
    title: "Credentialing Documents Not Showing in Salesforce (Sync Delay)",
    description: "Documents submitted in Axuall are not yet visible in Salesforce.",
    keywords: [
      "sync", "not in salesforce", "missing from salesforce", "not showing in salesforce",
      "24 hours", "delay", "documents not syncing", "sync delay", "how long to sync",
      "when will it appear", "still not showing", "not appearing in salesforce",
      "salesforce sync", "documents not updating", "when does it sync",
      "axuall to salesforce", "salesforce not updated", "documents missing salesforce",
      "not transferred", "documents havent synced"
    ],
    branches: [
      { key: 'under24', label: 'It has NOT been 24 hours yet' },
      { key: 'over24', label: 'It HAS been 24 hours and it still is not showing' }
    ],
    emailBranches: {
      under24: {
        subject: "Update on Your Credentialing Documents",
        body: `Hi [Provider Name]! Thanks for reaching out! Credentialing documents can take up to 24 hours to sync from Axuall to Salesforce after the application is completed. Since it has not been 24 hours yet, we recommend checking back tomorrow. Let us know if it still has not appeared by then and we will look into it further!\nBest,\n[Your Name]`
      },
      over24: {
        subject: "Update on Your Credentialing Documents",
        body: `Hi [Provider Name]! Thanks for flagging this! Since it has been more than 24 hours and the documents are still not appearing, we are going to escalate this to our development team to investigate. We will follow up as soon as we hear back!\nBest,\n[Your Name]`,
        escalationNote: `[Provider name] reported that credentialing documents are not syncing to Salesforce after more than 24 hours. Sent confirmation email. Escalating to dev team to investigate. Will update once we hear back.`
      }
    }
  },
  {
    id: 14, category: "portal", icon: "📊",
    title: "Status Still Shows 'Application Started' or 'Application Sent'",
    description: "Provider completed credentialing but their status still shows as in-progress.",
    keywords: [
      "application started", "application sent", "status not updated",
      "still shows started", "completed but status", "finished credentialing but",
      "status wrong", "incorrect status", "application not complete",
      "says started", "still in progress", "says application sent",
      "status hasnt changed", "status still shows", "application still open",
      "completed but still showing", "application status wrong",
      "status not changing", "finished but says started", "application status stuck"
    ],
    branches: [
      { key: 'notSubmitted', label: 'Provider has NOT fully submitted the application yet' },
      { key: 'submitted24h', label: 'Provider HAS fully submitted and it has been 24+ hours' }
    ],
    emailBranches: {
      notSubmitted: {
        subject: "Action Required: Complete Your Credentialing Application",
        body: `Hi [Provider Name]! Thanks for reaching out! If your status still shows "Application Started" or "Application Sent," it usually means the application has not been fully submitted in Axuall yet. Please log in to Axuall and make sure you have clicked the final submit button to complete the application. Let us know if you need any help finding it!\nBest,\n[Your Name]`
      },
      submitted24h: {
        subject: "Update on Your Credentialing Application Status",
        body: `Hi [Provider Name]! Thanks for following up! Since you have fully submitted your application and the status has not updated after 24 hours, please reply with a screenshot of what you are currently seeing and we will look into it right away.\nBest,\n[Your Name]`
      }
    }
  }
];

// Generic no-match template
const GENERIC_EMAIL = {
  subject: "We Received Your Message",
  body: `Hi [Provider Name],

Thank you for reaching out to LocumTenens.com TechOps support!

We have received your message and want to make sure it gets to the right team. To help us assist you faster, could you please provide:

- A brief description of what you are trying to do
- Any error messages you are seeing (a screenshot is very helpful)
- The device and browser you are using

You can also reach our TechOps Helpdesk directly at techopshelpdesk@locumtenens.com or 877-732-7080.

We will follow up as soon as possible!

[Your Name]`
};

// Escalation trigger words
const ESCALATION_TRIGGERS = ["attorney", "legal", "complaint", "hipaa", "data breach", "lawsuit", "discrimination"];

// ── COMMON PHRASES ─────────────────────────────────────────────────────────
const COMMON_PHRASES = [
  "Thank you for reaching out!",
  "Please don't hesitate to reach out if you have any questions!",
  "We will follow up shortly.",
  "Happy to help!",
  "Please let us know if you need anything else.",
  "We appreciate your patience.",
  "Our team is looking into this."
];

// ── ISSUE METADATA FOR CLOSING SUMMARIES ──────────────────────────────────
const ISSUE_CASUAL = {
  1:  "uploading their documents",
  2:  "not receiving emails from us",
  3:  "verifying their portal account",
  4:  "completing their online experience invite",
  5:  "getting into their account",
  6:  "logging in and resetting their password",
  7:  "getting a pop-up blocker on the authentication step",
  8:  "completing their credentialing application in Axuall",
  9:  "accessing the re-credentialing application in Axuall",
  10: "getting through the identity verification step in Axuall",
  11: "finding and using the Document Library",
  12: "the fields not pre-populating in their Axuall application",
  13: "documents not syncing from Axuall into Salesforce",
  14: "their application status not updating correctly"
};
const ISSUE_DETAIL = {
  1:  "The upload kept failing, most likely due to their VPN or browser restrictions.",
  2:  "Emails were likely going to their Spam or Junk folder.",
  3:  "They thought they were fully credentialed but hadn't completed the verification step.",
  4:  "They may have opened the invite link but not finished creating their account.",
  5:  "Their account was locked after too many login attempts.",
  6:  "The password reset went through but the account lock didn't clear immediately.",
  7:  "The 'Authenticate your account' button wasn't working due to a pop-up blocker.",
  8:  "They couldn't find the Credentials tab or got stuck partway through the application.",
  9:  "They didn't realize they needed to start re-credentialing through the portal.",
  10: "There was a name or date of birth mismatch with their government ID.",
  11: "Documents uploaded to the Document Library don't feed into the credentialing application. They are separate.",
  12: "Some fields auto-populate after identity verification, but others always require manual entry.",
  13: "Documents can take up to 24 hours to appear in Salesforce after submission.",
  14: "The status reflects the last action recorded, not necessarily that the application is incomplete."
};
const ISSUE_ACTION = {
  1:  "let them know it was likely their VPN or browser and sent over the troubleshooting steps",
  2:  "let them know to check their Spam folder and sent over instructions to whitelist the sender",
  3:  "clarified the difference between portal verification and credentialing and sent next steps",
  4:  "let them know they needed to complete the invite link and sent a new one",
  5:  "let them know their account was locked and walked them through resetting their password",
  6:  "let them know the reset worked and the lock clears on its own after a few minutes",
  7:  "let them know it was a pop-up blocker issue and sent over instructions to fix it",
  8:  "sent over the steps to access and complete their credentialing application in Axuall",
  9:  "let them know how to access re-credentialing through the portal and sent the steps",
  10: "let them know Axuall Support handles identity verification and gave them the contact number",
  11: "explained how the Document Library works and when it becomes accessible",
  12: "explained which fields auto-populate vs. which need to be entered manually",
  13: "reviewed the document sync issue and sent the appropriate next steps",
  14: "reviewed the application status issue and sent the appropriate next steps"
};

// ── MOCK QUEUE DATA ────────────────────────────────────────────────────────
const MOCK_QUEUE = [
  // ── UNASSIGNED ────────────────────────────────────────────────────────────
  {
    id: "CASE-00338220", provider: "Kyle Ostendorf", subject: "Timesheet Approver Change for BKG-1152098 & BKG-1155853",
    status: "In Process", priority: "Normal", created: "Mar 21", category: "kimedics", unread: true,
    caseOwner: null,
    services: "Kimedics 2.0", subCategory: "Users", rootCause: "Request", ltAssociate: "Kyle Ostendorf",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338220/view",
    thread: [
      {
        from: "Kyle Ostendorf (Recruiter)", role: "internal", email: "kostendorf@locumtenens.com",
        date: "Mar 21 · 10:14 AM",
        body: `Hi TechOps,

Can you confirm that the timesheet approver has been changed to Stacey Dudewicz (sdudewicz@tbhs.net) for BKG-1152098 and BKG-1155853?

Also, can you send her the Kimedics signup link so she can get access?

Thanks,
Kyle`
      }
    ]
  },
  {
    id: "CASE-00338218", provider: "Ashley Engle", subject: "Re: LTOE expense access",
    status: "In Process", priority: "Normal", created: "Mar 21", category: "ltoe", unread: true,
    caseOwner: null,
    services: "LTOE", subCategory: "Permissions", rootCause: "Access Issue", ltAssociate: "Ashley Engle",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338218/view",
    thread: [
      {
        from: "Desi Jackson", role: "internal", email: "djackson@locumtenens.com",
        date: "Mar 21 · 9:02 AM",
        body: `Hi TechOps,

Does producer Ashley Engle have access to the expense management tab in LTOE? Dr. McKinney is asking about reimbursement for Tyler housing and we're trying to figure out if Ashley can see the expense section from her end.

Thanks,
Desi`
      },
      {
        from: "Becky Joiner (TechOps)", role: "techops", email: "becky.eagan@locumtenens.com",
        date: "Mar 21 · 9:30 AM",
        body: `Hi Desi! Looping in @LT Helpdesk for assistance with this. Happy Friday!

Best,
Becky`
      }
    ]
  },
  // ── MY CASES ──────────────────────────────────────────────────────────────
  {
    id: "CASE-00338215", provider: "Justin Pham", subject: "RE: Justin Pham TS Error BKG-1155151",
    status: "In Process", priority: "High", created: "Mar 20", category: "ltoe", unread: true,
    caseOwner: "Kayla",
    services: "LTOE", subCategory: "Timesheet Error", rootCause: "Location Removed by Client", ltAssociate: "Maycee Moore",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338215/view",
    thread: [
      {
        from: "Maycee Moore (Recruiter)", role: "internal", email: "maycee.moore@locumtenens.com",
        date: "Mar 20 · 12:27 PM",
        body: `Hello!

I have run into an error for Justin Pham's TS in LTOE that I have not seen before. See attached screenshots. It also has not created a PTS in SF even though it is approved. The timesheet CAN be seen in Kimedics.`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 20 · 1:08 PM",
        body: `Hi Maycee!

Happy Friday! I will send this over to the dev team to have them take a look, and let you know once I hear back.

Best,
Kayla`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 20 · 2:19 PM",
        body: `Hi Maycee!

The dev team just got back to me and let me know that they think this is due to the location being removed. That might help fix the issue. Let me know if you have any questions!

Best,
Kayla`
      },
      {
        from: "Summer Hall", role: "internal", email: "summer.hall@locumtenens.com",
        date: "Mar 20 · 2:46 PM",
        body: `The location was removed due to the client asking for it to be removed. Is there a way to keep the location changed and fix the timesheet error?`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 20 · 3:57 PM",
        body: `Hi Summer!

You can click the New button and add a location there. If you are unable to do so, you can reach out to LT Helpdesk to have it added.

Let me know if you have any questions!
Best,
Kayla`
      },
      {
        from: "Summer Hall", role: "internal", email: "summer.hall@locumtenens.com",
        date: "Mar 20 · 4:09 PM",
        body: `The location was removed due to the client asking for it to be removed. Is there a way to keep the location changed and fix the timesheet error?`
      }
    ]
  },
  {
    id: "CASE-00338210", provider: "Dr. Ballester", subject: "RE: Credentialing",
    status: "On Hold", priority: "Normal", created: "Mar 17", category: "ltoe", unread: true,
    caseOwner: "Kayla",
    services: "LTOE", subCategory: "Login", rootCause: "Browser/Cache", ltAssociate: "Nikki Johnson",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338210/view",
    thread: [
      {
        from: "Nikki Johnson", role: "internal", email: "njohnson@locumtenens.com",
        date: "Mar 6 · 11:40 AM",
        body: `Hi TechOps,

Dr. Ballester is having trouble logging into LTOE. She says every time she enters her credentials it just refreshes the page and doesn't let her in. Can you help?

Thanks,
Nikki`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 6 · 12:15 PM",
        body: `Hi Nikki!

Thanks for reaching out. Can you have Dr. Ballester try clearing her browser cache and cookies, then try logging in again? If that doesn't work, have her try a different browser (Chrome if she's on Safari, or vice versa).

Best,
Kayla`
      },
      {
        from: "Nikki Johnson", role: "internal", email: "njohnson@locumtenens.com",
        date: "Mar 17 · 9:52 AM",
        body: `Hi Kayla, she tried clearing her cache and different browsers but is still having the same issue. Is there anything else we can try?`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 17 · 10:30 AM",
        body: `Hi Nikki!

Let's try a couple more things:
1. Have her try logging in from a completely different device (like her phone or a different computer)
2. Make sure she's going to www.locumtenens.com directly and not a saved bookmark that might be cached

Let me know how it goes!

Best,
Kayla`
      }
    ]
  },
  {
    id: "CASE-00338207", provider: "Dr. Willis Hong", subject: "RE: LocumTenens.com Credentialing",
    status: "On Hold", priority: "Normal", created: "Mar 16", category: "cred", unread: false,
    caseOwner: "Kayla",
    services: "LTOE", subCategory: "Email Verification", rootCause: "Popup Blocker", ltAssociate: "Greyson Bargeron",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338207/view",
    thread: [
      {
        from: "Greyson Bargeron (Recruiter)", role: "internal", email: "gbargeron@locumtenens.com",
        date: "Mar 16 · 2:10 PM",
        body: `Hi TechOps,

Dr. Willis Hong says he never received his LTOE verification email. He's ready to complete credentialing — can you resend it?

Thanks,
Greyson`
      },
      {
        from: "Noah C. (TechOps)", role: "techops", email: "noah.coarde@locumtenens.com",
        date: "Mar 16 · 2:45 PM",
        body: `Hi Greyson,

Dr. Hong's account hasn't been verified yet — the original invite was sent 3/16. I've resent it now.

One thing to flag: Dr. Hong may need to disable his popup blocker to complete the verification step. In Safari: Settings > Safari > Block Pop-ups (toggle off). In Chrome: click the icon in the address bar when the page loads.

Let me know if he has any issues!

Best,
Noah`
      },
      {
        from: "Greyson Bargeron (Recruiter)", role: "internal", email: "gbargeron@locumtenens.com",
        date: "Mar 17 · 9:05 AM",
        body: `All good, thank you!`
      }
    ]
  },
  // ── CLOSED ────────────────────────────────────────────────────────────────
  {
    id: "CASE-00338205", provider: "Dr. Pravina Bhagvandas Sheth", subject: "RE: Dr. Pravina Bhagvandas Sheth - LTOE",
    status: "Closed", priority: "Normal", created: "Mar 20", category: "ltoe", unread: false,
    caseOwner: "Kayla",
    services: "LTOE", subCategory: "Password Reset", rootCause: "How to", ltAssociate: "Meghan Senes",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338205/view",
    thread: [
      {
        from: "Meghan Senes (Recruiter)", role: "internal", email: "msenes@locumtenens.com",
        date: "Mar 20 · 11:18 AM",
        body: `Hi TechOps,

Is there a way to retrieve or reset Dr. Sheth's LTOE password? She's locked out and can't remember it.

Thanks,
Meghan`
      },
      {
        from: "Noah C. (TechOps)", role: "techops", email: "noah.coarde@locumtenens.com",
        date: "Mar 20 · 11:45 AM",
        body: `Hi Meghan,

TechOps is not able to retrieve or change provider passwords on our end. The best path forward is to have Dr. Sheth use the Forgot Password option on the locumtenens.com login page — she'll get a reset link sent to her email on file.

Let me know if she runs into any trouble with that!

Best,
Noah`
      }
    ]
  },
  {
    id: "CASE-00338200", provider: "Dr. Kahn Johnson", subject: "RE: Change email",
    status: "Closed", priority: "Normal", created: "Mar 19", category: "account", unread: false,
    caseOwner: "Kayla",
    services: "LTOE", subCategory: "Account Update", rootCause: "Request", ltAssociate: "Kristina Armistead",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338200/view",
    thread: [
      {
        from: "Kristina Armistead (Recruiter)", role: "internal", email: "karmistead@locumtenens.com",
        date: "Mar 19 · 8:55 AM",
        body: `Hi TechOps,

Dr. Kahn Johnson registered on LTOE with an old email and wants to update it to dr.kahnjohnson777@gmail.com. Can you help?

Thanks,
Kristina`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 19 · 9:20 AM",
        body: `Hi Kristina!

I've looped in LT Helpdesk to get Dr. Johnson's email address updated — they'll handle the change on the backend. You should hear back once it's done.

Best,
Kayla`
      },
      {
        from: "Kristina Armistead (Recruiter)", role: "internal", email: "karmistead@locumtenens.com",
        date: "Mar 19 · 9:35 AM",
        body: `Thank you!`
      }
    ]
  },
  {
    id: "CASE-00338195", provider: "Kristen", subject: "RE: Kristen Timecard",
    status: "Closed", priority: "Normal", created: "Mar 18", category: "kimedics", unread: false,
    caseOwner: "Kayla",
    services: "Kimedics 2.0", subCategory: "Timecard", rootCause: "Email Spam Filter", ltAssociate: "Lauren Szigety",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338195/view",
    thread: [
      {
        from: "Lauren Szigety (Recruiter)", role: "internal", email: "lszigety@locumtenens.com",
        date: "Mar 18 · 1:12 PM",
        body: `Hi TechOps,

Kelly Zoran (kzoran@foxcitiesaha.com) is not receiving Kristen's timecards — her admin says they're getting marked as spam. Tyler updated the email in the system. Can you send Kelly another Kimedics invitation?

Thanks,
Lauren`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 18 · 2:00 PM",
        body: `Hi Lauren!

I've sent Kelly Zoran another invitation to kzoran@foxcitiesaha.com. She should receive it shortly. Have her check spam just in case — once she accepts she'll be all set to approve timecards.

Best,
Kayla`
      },
      {
        from: "Tyler Dalton", role: "internal", email: "tdalton@locumtenens.com",
        date: "Mar 18 · 2:18 PM",
        body: `Thank you!`
      }
    ]
  },
  {
    id: "CASE-00338190", provider: "Dr. Ahmed Aly Farag", subject: "RE: Ahmed Aly Farag - cred issues",
    status: "Closed", priority: "Normal", created: "Mar 18", category: "cred", unread: false,
    caseOwner: "Kayla",
    services: "LTOE", subCategory: "Credapp.", rootCause: "Mobile Browser", ltAssociate: "Allison Bloodworth",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338190/view",
    thread: [
      {
        from: "Allison Bloodworth (Recruiter)", role: "internal", email: "asbloodworth@locumtenens.com",
        date: "Mar 18 · 10:35 AM",
        body: `Hi TechOps,

Dr. Farag is pending a booking and is getting an error when trying to access credentialing. The screen just says "Oh no. Something is definitely broken." Can you help?

Thanks,
Allison`
      },
      {
        from: "Noah C. (TechOps)", role: "techops", email: "noah.coarde@locumtenens.com",
        date: "Mar 18 · 11:10 AM",
        body: `Hi Allison,

That error message shows up when someone is trying to access the credentialing page on a mobile device — the page isn't fully compatible with mobile browsers yet.

Have Dr. Farag try using this direct link on a laptop or desktop in Google Chrome:
https://portal.locumtenens.com/#/credentials/overview

That should get him in. Let me know if he needs anything else!

Best,
Noah`
      },
      {
        from: "Allison Bloodworth (Recruiter)", role: "internal", email: "asbloodworth@locumtenens.com",
        date: "Mar 18 · 11:30 AM",
        body: `Thank you! I will share 😊`
      }
    ]
  },
  {
    id: "CASE-00338185", provider: "Eugene Podrazik", subject: "Re: Troubleshooting LTOE",
    status: "Closed", priority: "Normal", created: "Mar 17", category: "ltoe", unread: false,
    caseOwner: "Kayla",
    services: "LTOE", subCategory: "Credapp.", rootCause: "Popup Blocker", ltAssociate: "Jacob Greenwood",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338185/view",
    thread: [
      {
        from: "Jacob Greenwood (Recruiter)", role: "internal", email: "jgreenwood@locumtenens.com",
        date: "Mar 17 · 2:40 PM",
        body: `Hi TechOps,

Dr. Podrazik's LTOE keeps freezing when he tries to enter his NPI number. The page just hangs and nothing happens. Can you take a look?

Thanks,
Jacob`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 17 · 3:15 PM",
        body: `Hi Jacob!

This sounds like a popup blocker issue — sometimes the NPI lookup triggers a popup that gets blocked, which causes the page to hang. Have Dr. Podrazik disable his popup blocker for the LTOE site and try again.

Let me know how it goes!

Best,
Kayla`
      },
      {
        from: "Jacob Greenwood (Recruiter)", role: "internal", email: "jgreenwood@locumtenens.com",
        date: "Mar 17 · 4:02 PM",
        body: `That worked! Dr. Podrazik was able to access his credentialing application and he's almost done. Thank you!`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 17 · 4:08 PM",
        body: `Of course! Happy I could help.`
      }
    ]
  },
  {
    id: "CASE-00338175", provider: "Mohamed Humad", subject: "RE: Mohamed Humad - Cred App Incomplete",
    status: "Closed", priority: "Normal", created: "Mar 16", category: "cred", unread: false,
    caseOwner: "Kayla",
    services: "LTOE", subCategory: "Credapp.", rootCause: "Mobile Browser", ltAssociate: "Megan Johnson",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338175/view",
    thread: [
      {
        from: "Megan Johnson (Recruiter)", role: "internal", email: "mjohnson@locumtenens.com",
        date: "Mar 16 · 9:45 AM",
        body: `Hi TechOps,

Mohamed Humad's credentialing app is showing as incomplete. He's getting an error that says "Oh no, something is broken" when he tries to access it. Forwarded from Madison McKee.

Thanks,
Megan`
      },
      {
        from: "Becky Joiner (TechOps)", role: "techops", email: "becky.eagan@locumtenens.com",
        date: "Mar 16 · 10:20 AM",
        body: `Hi Megan!

That error is a known mobile device compatibility issue. Here's how Mohamed can access it:

1. Use this direct link: https://portal.locumtenens.com/#/credentials/overview
2. Open it on a laptop or desktop (not a phone)
3. Use Google Chrome
4. Make sure third-party cookies are enabled and popup blockers are off

Clear browser cache before trying as well. Let me know if he needs anything else!

Best,
Becky`
      },
      {
        from: "Megan Johnson (Recruiter)", role: "internal", email: "mjohnson@locumtenens.com",
        date: "Mar 16 · 10:45 AM",
        body: `Thank you so much for this!`
      }
    ]
  },
  {
    id: "CASE-00338165", provider: "Jessica Griffin", subject: "RE: Recent coverage in Longview, TX",
    status: "Closed", priority: "Normal", created: "Mar 15", category: "kimedics", unread: false,
    caseOwner: "Kayla",
    services: "Kimedics 2.0", subCategory: "Practice Access", rootCause: "Sync Issue", ltAssociate: "Desi Jackson",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338165/view",
    thread: [
      {
        from: "Desi Jackson", role: "internal", email: "djackson@locumtenens.com",
        date: "Mar 15 · 11:00 AM",
        body: `Hi TechOps,

The timesheet for Jessica Griffin's recent coverage in Longview, TX isn't showing when I impersonate her account. She should be set up as the approver. Can you look into this?

Thanks,
Desi`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 15 · 11:45 AM",
        body: `Hi Desi!

I went ahead and added Jessica Griffin's practice access in Kimedics — it should now be visible from impersonation. I also sent her a Kimedics invitation so she can set up her account if she hasn't already.

Let me know if everything looks right on your end!

Best,
Kayla`
      },
      {
        from: "Desi Jackson", role: "internal", email: "djackson@locumtenens.com",
        date: "Mar 15 · 12:10 PM",
        body: `Thank you! We are all set now!`
      },
      {
        from: "Kayla (TechOps)", role: "techops", email: "kayla.hurd@locumtenens.com",
        date: "Mar 15 · 12:15 PM",
        body: `Awesome! I hope you have a great weekend!`
      }
    ]
  },
  {
    id: "CASE-00338155", provider: "Brooke Crist", subject: "RE: New Timesheet Approver - BKG-1148185",
    status: "Closed", priority: "Normal", created: "Mar 14", category: "kimedics", unread: false,
    caseOwner: "Alejandro",
    services: "Kimedics 2.0", subCategory: "Users", rootCause: "Request", ltAssociate: "Will Morris",
    sfUrl: "https://locumtenens.lightning.force.com/lightning/r/Case/CASE-00338155/view",
    thread: [
      {
        from: "Will Morris (Recruiter)", role: "internal", email: "wmorris@locumtenens.com",
        date: "Mar 14 · 3:22 PM",
        body: `Hi TechOps,

The previous timesheet approver for BKG-1148185 is retiring. We need to add Brooke Crist as the new approver. Can you send her a Kimedics signup link?

Thanks,
Will`
      },
      {
        from: "Alejandro G. (TechOps)", role: "techops", email: "aguerrero@locumtenens.com",
        date: "Mar 14 · 4:05 PM",
        body: `Hi Will,

I've sent Brooke Crist the Kimedics invitation. She can also use the direct link to sign up:
https://portal2.kimedics.com/invite?key=C80B2AAF-2955-483A-92C3-23DA26C6404C

Let me know if she has any trouble getting access!

Best,
Alejandro`
      }
    ]
  }
];

// ── QUEUE STATE ───────────────────────────────────────────────────────────
let activeQueueFilter = 'all';
let activeCaseId = null;

function renderQueue(filter = 'all') {
  const container = document.getElementById('queue-items');
  const me = currentUser ? currentUser.name : 'Kayla';
  document.getElementById('queue-count').textContent = MOCK_QUEUE.length;

  const makeCard = c => {
    const statusDot = c.status === 'In Process' ? '#3b82f6' : c.status === 'On Hold' ? '#f59e0b' : '#10b981';
    const isUnassigned = !c.caseOwner;
    return `<div class="queue-item ${activeCaseId === c.id ? 'active' : ''}" onclick="openCase('${c.id}')">
      <div class="qi-top">
        <span class="qi-case">${c.id}</span>
        <div style="display:flex;gap:4px;align-items:center;">
          ${isUnassigned ? `<button class="btn-claim" onclick="event.stopPropagation();claimCase('${c.id}')">Claim</button>` : ''}
          <span class="status-badge" style="background:${statusDot}22;color:${statusDot};font-size:10px;padding:2px 8px;">${c.status}</span>
        </div>
      </div>
      <div class="qi-provider">${c.unread ? '<span class="qi-unread"></span> ' : ''}${c.provider}</div>
      <div class="qi-subject">${c.subject}</div>
      <div class="qi-meta">
        <span class="qi-date">${c.created}</span>
        <span style="color:var(--muted);font-size:11px;">· ${c.thread.length} msg${c.thread.length !== 1 ? 's' : ''}</span>
        ${c.ltAssociate ? `<span style="color:var(--muted);font-size:11px;">· ${c.ltAssociate}</span>` : ''}
        ${c.priority === 'High' ? '<span style="color:var(--warn);font-size:10px;font-weight:700;">▲ High</span>' : ''}
      </div>
    </div>`;
  };

  // Non-default filter: flat list
  if (filter !== 'all') {
    const filtered = MOCK_QUEUE.filter(c => c.status === filter);
    if (filtered.length === 0) {
      container.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted);font-size:13px;">No cases match this filter.</div>';
    } else {
      container.innerHTML = filtered.map(makeCard).join('');
    }
    return;
  }

  // Default "all" view: two sections — Unassigned then My Cases
  const unassigned = MOCK_QUEUE.filter(c => !c.caseOwner && c.status !== 'Closed');
  const mine       = MOCK_QUEUE.filter(c => c.caseOwner === me && c.status !== 'Closed');
  const closed     = MOCK_QUEUE.filter(c => c.status === 'Closed');

  let html = '';

  if (unassigned.length > 0) {
    html += `<div class="queue-section-header">
      <span>Unassigned</span>
      <span class="queue-section-count">${unassigned.length}</span>
    </div>`;
    html += unassigned.map(makeCard).join('');
  }

  if (mine.length > 0) {
    html += `<div class="queue-section-header" style="margin-top:${unassigned.length > 0 ? '14px' : '0'};">
      <span>My Cases</span>
      <span class="queue-section-count">${mine.length}</span>
    </div>`;
    html += mine.map(makeCard).join('');
  }

  if (closed.length > 0) {
    html += `<div class="queue-section-header" style="margin-top:14px;opacity:.6;">
      <span>Closed</span>
      <span class="queue-section-count">${closed.length}</span>
    </div>`;
    html += closed.map(makeCard).join('');
  }

  if (!html) {
    html = '<div style="padding:20px;text-align:center;color:var(--muted);font-size:13px;">No cases.</div>';
  }

  container.innerHTML = html;
}

function claimCase(caseId) {
  const c = MOCK_QUEUE.find(q => q.id === caseId);
  if (!c) return;
  c.caseOwner = currentUser ? currentUser.name : 'Kayla';
  c.status = 'On Hold';
  renderQueue(activeQueueFilter);
  openCase(caseId);
}

function openCase(caseId) {
  activeCaseId = caseId;
  const c = MOCK_QUEUE.find(q => q.id === caseId);
  if (!c) return;
  c.unread = false;
  renderQueue(activeQueueFilter);
  setChatCase(caseId);

  const panel = document.getElementById('queue-detail-panel');
  const lastEmail = c.thread[c.thread.length - 1];
  const needsReply = lastEmail.role !== 'techops';

  const threadHtml = c.thread.map(msg => {
    const isTechOps = msg.role === 'techops';
    const roleLabel = isTechOps ? '<span class="te-role">TechOps</span>' : msg.role === 'internal' ? '<span class="te-role" style="background:var(--warn);">Internal</span>' : '';
    return `<div class="thread-email ${isTechOps ? 'techops' : ''}">
      <div class="te-header">
        <span><span class="te-from">${msg.from}</span>${roleLabel} <span style="font-size:11px;color:var(--muted);">&lt;${msg.email}&gt;</span></span>
        <span class="te-date">${msg.date}</span>
      </div>
      <div class="te-body">${(msg.body || '').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
    </div>`;
  }).join('');

  panel.innerHTML = `
    <div class="case-detail">
      <div class="case-detail-header">
        <div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:800;">${c.id}</span>
            <span class="status-badge status-${c.status.toLowerCase().replace(/ /g,'-')}">${c.status === 'In Process' ? '🔵' : c.status === 'On Hold' ? '🟡' : '🟢'} ${c.status}</span>
            ${c.priority === 'High' ? '<span style="color:var(--warn);font-size:12px;font-weight:700;">▲ High Priority</span>' : ''}
          </div>
          <div class="case-detail-meta">${c.provider} · ${c.thread.length} message${c.thread.length !== 1 ? 's' : ''} · ${c.created}${c.ltAssociate ? ` · LT Associate: ${c.ltAssociate}` : ''}${c.services ? ` · ${c.services}` : ''}</div>
        </div>
        <div class="case-detail-actions">
          <button class="show-list-btn btn btn-ghost btn-sm" onclick="restoreQueueList()">◀ Cases</button>
          <button class="btn btn-ghost btn-sm" onclick="getSummary('${c.id}')" id="summary-btn-${c.id}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            Get Summary
          </button>
          <a class="btn-open-sf" href="${c.sfUrl}" target="_blank" rel="noopener">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Open in SF
          </a>
        </div>
      </div>
      <div class="thread-view">${threadHtml}</div>
      <div class="compose-section">
        <div class="compose-header">
          <span class="compose-title">✉️ ${needsReply ? 'Compose Reply' : 'Thread resolved. Compose a follow-up?'}</span>
          <button class="btn btn-primary btn-sm" id="gen-reply-btn-${c.id}" onclick="analyzeAndReply('${c.id}')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Auto-Generate Response
          </button>
        </div>
        <div class="compose-output" id="compose-output-${c.id}">
          <div class="subject-line" id="compose-subject-${c.id}" style="margin-bottom:8px;"></div>
          <textarea class="compose-draft" id="compose-draft-${c.id}"></textarea>
          <div class="compose-footer">
            <button class="btn btn-copy btn-sm" id="compose-copy-${c.id}" onclick="copyComposeDraft('${c.id}')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copy Response
            </button>
            <a class="btn-open-sf" href="${c.sfUrl}" target="_blank" rel="noopener" style="font-size:12px;">
              Open in SF to send ↗
            </a>
          </div>
          <div class="compose-closing" id="compose-closing-${c.id}">
            <strong>📝 Closing Summary: paste into SF Post tab when done</strong>
            <span id="compose-closing-text-${c.id}"></span>
            <button class="btn btn-copy btn-sm" id="compose-closing-copy-${c.id}" style="margin-top:6px;" onclick="copyComposedClosing('${c.id}')">Copy Closing</button>
          </div>
        </div>
      </div>
    </div>`;

  // Scroll thread to bottom
  const threadView = panel.querySelector('.thread-view');
  if (threadView) setTimeout(() => { threadView.scrollTop = threadView.scrollHeight; }, 50);
}

function analyzeAndReplyFallback(caseId, c) {
  const lastProviderMsg = [...c.thread].reverse().find(m => m.role !== 'techops');
  const allText = c.thread.map(m => m.body).join('\n\n');
  const matches = detectIssues(allText);
  const issue = matches.length > 0 ? matches[0].issue : null;

  // If this issue requires a branch selection, show prompt instead of auto-drafting
  if (issue && issue.branches) {
    const outputEl = document.getElementById(`compose-output-${caseId}`);
    outputEl.classList.add('show');
    const draftEl = document.getElementById(`compose-draft-${caseId}`);
    const footerEl = outputEl.querySelector('.compose-footer');
    draftEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'none';
    const subjectEl = document.getElementById(`compose-subject-${caseId}`);
    subjectEl.innerHTML = '';
    const branchHtml = `<div class="compose-branch-prompt" id="compose-branch-prompt-${caseId}">
      <div class="compose-branch-label">Before generating a reply, please confirm:</div>
      <div class="compose-branch-options">
        ${issue.branches.map(b => `<button class="compose-branch-btn" onclick="applyBranch('${caseId}', ${issue.id}, '${b.key}')">${b.label}</button>`).join('')}
      </div>
    </div>`;
    subjectEl.insertAdjacentHTML('afterend', branchHtml);
    return;
  }

  const email = issue ? issue.email : GENERIC_EMAIL;
  const senderName = lastProviderMsg ? (lastProviderMsg.from.split(' ')[0] === 'Dr.' ? lastProviderMsg.from.split(' ')[1] : lastProviderMsg.from.split(' ')[0]) : null;
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const dayOpener = day === 'Friday' ? 'Happy Friday.' : day === 'Monday' ? 'Hope you had a great weekend.' : `Good ${new Date().getHours() < 12 ? 'morning' : 'afternoon'}.`;
  let draft = email.body
    .replace(/\[Provider Name\]/g, senderName || '[Provider Name]')
    .replace(/\[Name\]/g, senderName || '[Name]')
    .replace('[DAY_OPENER]', dayOpener)
    .replace('Happy [Day]!', dayOpener)
    .replace('[Day]', day);
  draft = draft.replace(/\n{2,}/g, '\n');
  const profile = getStyleProfile(currentUser ? currentUser.name : 'Kayla');
  const profileHasDash = Object.values(profile).some(v => typeof v === 'string' && /[–—]/.test(v));
  if (!profileHasDash) {
    draft = draft.replace(/\s*[–—]\s*/g, ', ');
  }
  document.getElementById(`compose-subject-${caseId}`).innerHTML = `<span style="font-weight:700;color:var(--info-text);">Subject: </span><em>${email.subject}</em>`;
  document.getElementById(`compose-draft-${caseId}`).value = draft;
  document.getElementById(`compose-output-${caseId}`).classList.add('show');
  const issueId = issue ? issue.id : null;
  const internalSender = c.thread.find(m => m.role === 'internal');
  const internalName = internalSender ? internalSender.from.split(' (')[0] : null;
  let closing = internalName
    ? `${internalName} reached out because ${c.provider} was having trouble with ${issueId ? ISSUE_CASUAL[issueId] : 'something'}.`
    : `${c.provider} reached out because they were having trouble with ${issueId ? ISSUE_CASUAL[issueId] : 'something'}.`;
  if (issueId && ISSUE_DETAIL[issueId]) closing += ` ${ISSUE_DETAIL[issueId]}`;
  closing += ` I ${issueId ? ISSUE_ACTION[issueId] : 'reviewed the issue and sent over next steps'}.`;
  closing += ` ${capitalize(profile['sent'])}`;
  const closingEl = document.getElementById(`compose-closing-${caseId}`);
  document.getElementById(`compose-closing-text-${caseId}`).textContent = ' ' + closing;
  closingEl.classList.add('show');
}

function applyBranch(caseId, issueId, branchKey) {
  const issue = ISSUES.find(i => i.id === issueId);
  if (!issue || !issue.emailBranches) return;
  const branch = issue.emailBranches[branchKey];
  if (!branch) return;

  // Remove branch prompt, restore textarea and footer
  const prompt = document.getElementById(`compose-branch-prompt-${caseId}`);
  if (prompt) prompt.remove();
  const outputEl = document.getElementById(`compose-output-${caseId}`);
  const draftEl = document.getElementById(`compose-draft-${caseId}`);
  const footerEl = outputEl.querySelector('.compose-footer');
  draftEl.style.display = '';
  if (footerEl) footerEl.style.display = '';

  // Fill subject and draft
  document.getElementById(`compose-subject-${caseId}`).innerHTML = `<span style="font-weight:700;color:var(--info-text);">Subject: </span><em>${branch.subject}</em>`;
  const c = MOCK_QUEUE.find(q => q.id === caseId);
  const lastProviderMsg = c ? [...c.thread].reverse().find(m => m.role !== 'techops') : null;
  const senderName = lastProviderMsg ? (lastProviderMsg.from.split(' ')[0] === 'Dr.' ? lastProviderMsg.from.split(' ')[1] : lastProviderMsg.from.split(' ')[0]) : null;
  let draft = branch.body
    .replace(/\[Provider Name\]/g, senderName || '[Provider Name]')
    .replace(/\[Name\]/g, senderName || '[Name]');
  draft = draft.replace(/\n{2,}/g, '\n');
  draftEl.value = draft;

  const closingEl = document.getElementById(`compose-closing-${caseId}`);
  const closingTextEl = document.getElementById(`compose-closing-text-${caseId}`);
  if (branch.escalationNote) {
    closingTextEl.textContent = ' ' + branch.escalationNote;
    closingEl.classList.add('show');
  } else {
    const profile = getStyleProfile(currentUser ? currentUser.name : 'Kayla');
    const internalSender = c ? c.thread.find(m => m.role === 'internal') : null;
    const internalName = internalSender ? internalSender.from.split(' (')[0] : null;
    const providerName = c ? c.provider : '[Provider]';
    let closing = internalName
      ? `${internalName} reached out because ${providerName} was having trouble with ${ISSUE_CASUAL[issueId] || 'something'}.`
      : `${providerName} reached out because they were having trouble with ${ISSUE_CASUAL[issueId] || 'something'}.`;
    if (ISSUE_DETAIL[issueId]) closing += ` ${ISSUE_DETAIL[issueId]}`;
    closing += ` I ${ISSUE_ACTION[issueId] || 'reviewed the issue and sent over next steps'}.`;
    closing += ` ${capitalize(profile['sent'])}`;
    closingTextEl.textContent = ' ' + closing;
    closingEl.classList.add('show');
  }
}

async function analyzeAndReply(caseId) {
  const c = MOCK_QUEUE.find(q => q.id === caseId);
  if (!c) return;

  // Check for a branching issue before hitting the API
  const allTextPre = c.thread.map(m => m.body).join('\n\n');
  const matchesPre = detectIssues(allTextPre);
  const issuePre = matchesPre.length > 0 ? matchesPre[0].issue : null;
  if (issuePre && issuePre.branches) {
    analyzeAndReplyFallback(caseId, c);
    return;
  }

  const outputEl = document.getElementById(`compose-output-${caseId}`);
  const draftEl = document.getElementById(`compose-draft-${caseId}`);
  const subjectEl = document.getElementById(`compose-subject-${caseId}`);
  const closingEl = document.getElementById(`compose-closing-${caseId}`);
  const closingTextEl = document.getElementById(`compose-closing-text-${caseId}`);
  const btn = document.getElementById(`gen-reply-btn-${caseId}`);

  outputEl.classList.add('show');
  if (closingEl) closingEl.classList.remove('show');
  subjectEl.innerHTML = '';
  draftEl.value = '';
  draftEl.placeholder = 'Generating response…';
  if (btn) { btn.disabled = true; btn.textContent = 'Generating…'; }

  const name = currentUser ? currentUser.name : 'Kayla';
  const profile = getStyleProfile(name);
  const thread = c.thread.map(m => `[${m.role === 'provider' ? 'Provider' : 'TechOps'}]: ${m.body}`).join('\n\n');
  const kbList = ISSUES.map(i => `- ${i.title}: ${i.description}`).join('\n');
  const teamKB = localStorage.getItem('techops_team_kb') || '';

  try {
    const replyResp = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 600,
        system: `You are ${name}, a TechOps support agent at LocumTenens.com. Write a professional, warm email reply to a provider based on their support thread. Use the TechOps knowledge base to give the right answer. Sign the email "${name}". Never use em dashes. Never use emojis. Plain text only — no bullet points with symbols, no decorative characters. If you can identify the provider's name from the thread, use it in the greeting; otherwise use "Hi!". Return ONLY the email body — no subject line, no extra commentary, just the email text ready to send.${profile.instructions ? `\n\nPersonal instructions from ${name}: ${profile.instructions}` : ''}\n\nKNOWLEDGE BASE:\n${kbList}${teamKB ? `\n\nTEAM EMAIL PATTERNS:\n${teamKB}` : ''}`,
        messages: [{ role: 'user', content: `Write the next reply from TechOps for this case.\n\nCase: ${c.id} — ${c.subject}\nProvider: ${c.provider}\n\nFull thread:\n${thread}` }]
      })
    });
    if (!replyResp.ok) throw new Error('Worker error');
    const replyData = await replyResp.json();
    const reply = replyData.content[0].text;

    draftEl.placeholder = '';
    draftEl.value = reply;
    subjectEl.innerHTML = `<span style="font-weight:700;color:var(--info-text);">Subject: </span><em>Re: ${c.subject}</em>`;

    // Generate closing summary via API
    try {
      const summaryResp = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 200,
          system: `You write SF closing summaries for TechOps support cases at LocumTenens.com. Write 1-3 sentences in first person as ${name}. Cover: who reached out, what the issue was, and how it was resolved. The case is complete. End with the provider's pronoun — "She is gtg.", "He is gtg.", or "They are gtg." Default to "They are gtg." if unclear. Return only the summary text — no labels, headers, or extra formatting.`,
          messages: [{ role: 'user', content: `Write an SF closing summary.\n\nCase: ${c.id} — ${c.subject}\nProvider: ${c.provider}\n\nThread:\n${thread}` }]
        })
      });
      if (summaryResp.ok) {
        const summaryData = await summaryResp.json();
        closingTextEl.textContent = ' ' + summaryData.content[0].text;
        closingEl.classList.add('show');
      }
    } catch {}

  } catch (err) {
    draftEl.placeholder = '';
    analyzeAndReplyFallback(caseId, c);
  }

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Auto-Generate Response`;
  }
}

async function getSummary(caseId) {
  const c = MOCK_QUEUE.find(q => q.id === caseId);
  if (!c) return;

  // Toggle off if already showing
  let existing = document.getElementById(`inline-summary-${caseId}`);
  if (existing) {
    existing.remove();
    const btn = document.getElementById(`summary-btn-${caseId}`);
    if (btn) btn.textContent = 'Get Summary';
    return;
  }

  // Show loading state immediately
  const header = document.querySelector(`#queue-detail-panel .case-detail-header`);
  const el = document.createElement('div');
  el.id = `inline-summary-${caseId}`;
  el.style.cssText = 'background:var(--tip-bg);border:1px solid var(--tip-border);border-radius:var(--radius-sm);padding:12px 16px;margin:0 18px 14px;font-size:13px;line-height:1.7;color:var(--tip-text);';
  el.innerHTML = `
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;opacity:.7;">📝 SF Closing Summary</div>
    <div id="inline-summary-text-${caseId}" style="color:var(--muted);font-style:italic;">Generating summary…</div>`;
  header.insertAdjacentElement('afterend', el);

  const btn = document.getElementById(`summary-btn-${caseId}`);
  if (btn) btn.textContent = 'Hide Summary';

  const name = currentUser ? currentUser.name : 'Kayla';
  const profile = getStyleProfile(name);
  const thread = c.thread.map(m => `[${m.role === 'provider' ? 'Provider' : 'TechOps'}]: ${m.body}`).join('\n\n');

  let summaryText = '';
  try {
    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 256,
        system: `You write SF closing summaries for TechOps support cases at LocumTenens.com. Write 1-3 sentences in first person as ${name}. Cover: who reached out, what the issue was, and how it was resolved. The case is complete. End with the provider's pronoun based on the thread — use "She is gtg.", "He is gtg.", or "They are gtg." If you cannot determine the pronoun from context, default to "They are gtg." Return only the summary text — no labels, headers, or extra formatting.`,
        messages: [{ role: 'user', content: `Write an SF closing summary for this case.\n\nCase: ${c.id} — ${c.subject}\nProvider: ${c.provider}\n\nThread:\n${thread}` }]
      })
    });
    if (!response.ok) throw new Error('Worker error');
    const data = await response.json();
    summaryText = data.content[0].text;
  } catch (err) {
    // Fallback to keyword matching
    const allText = c.thread.map(m => m.body).join('\n\n');
    const matches = detectIssues(allText);
    const issue = matches.length > 0 ? matches[0].issue : null;
    const issueId = issue ? issue.id : null;
    const issueDesc = issueId ? ISSUE_CASUAL[issueId] : null;
    const issueDetail = issueId ? ISSUE_DETAIL[issueId] : null;
    const issueAction = issueId ? ISSUE_ACTION[issueId] : null;
    const internalSender = c.thread.find(m => m.role === 'internal');
    const internalName = internalSender ? internalSender.from.split(' (')[0] : null;
    if (internalName) {
      summaryText = `${internalName} reached out because ${c.provider} was having trouble with ${issueDesc || 'a technical issue'}.`;
    } else {
      summaryText = `${c.provider} reached out because they were having trouble with ${issueDesc || 'a technical issue'}.`;
    }
    if (issueDetail) summaryText += ` ${issueDetail}`;
    summaryText += ` I ${issueAction || 'reviewed the issue and sent over next steps'}.`;
    summaryText += ` ${capitalize(profile['sent'])}`;
  }

  const container = document.getElementById(`inline-summary-${caseId}`);
  if (container) {
    container.style.display = 'flex';
    container.style.gap = '10px';
    container.style.alignItems = 'flex-start';
    container.innerHTML = `
      <div style="flex:1;">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;opacity:.7;">📝 SF Closing Summary</div>
        <div id="inline-summary-text-${caseId}" style="color:var(--text);">${summaryText}</div>
      </div>
      <button class="btn btn-copy btn-sm" onclick="copyInlineSummary('${caseId}')">Copy</button>`;
  }
}

function copyInlineSummary(caseId) {
  const text = document.getElementById(`inline-summary-text-${caseId}`)?.textContent?.trim();
  const btn = document.querySelector(`#inline-summary-${caseId} .btn-copy`);
  if (text && btn) copyToClipboard(text, btn, 'Copy');
}

function copyComposeDraft(caseId) {
  const btn = document.getElementById(`compose-copy-${caseId}`);
  const text = document.getElementById(`compose-draft-${caseId}`).value.replace(/<[^>]+>/g, '').trim();
  copyToClipboard(text, btn, 'Copy Response');
}

function copyComposedClosing(caseId) {
  const btn = document.getElementById(`compose-closing-copy-${caseId}`);
  const text = document.getElementById(`compose-closing-text-${caseId}`).textContent.trim();
  copyToClipboard(text, btn, 'Copy Closing');
}


function filterQueue(filter) {
  activeQueueFilter = filter;
  document.querySelectorAll('[data-qfilter]').forEach(b => b.classList.toggle('active', b.dataset.qfilter === filter));
  renderQueue(filter === 'all' ? 'all' : filter);
}

function refreshQueue() {
  const btn = event.target.closest('button');
  const orig = btn.innerHTML;
  btn.innerHTML = '⟳ Refreshing…';
  setTimeout(() => { btn.innerHTML = orig; renderQueue(activeQueueFilter); }, 800);
}

// ── TABS ──────────────────────────────────────────────────────────────────
let autoCollapsedSidebar = false;
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + tabId));
  document.body.classList.toggle('on-queue', tabId === 'queue');
  const fab = document.getElementById('chat-fab');
  if (tabId === 'assistant') {
    if (fab) fab.style.display = 'none';
    if (chatOpen) { undockChatPanel(); document.getElementById('chat-panel').classList.remove('open'); chatOpen = false; }
    if (!sidebarCollapsed) { toggleSidebar(); autoCollapsedSidebar = true; }
    document.body.classList.add('on-assistant');
  } else {
    if (fab) fab.style.display = '';
    if (chatOpen) {
      if (tabId === 'queue') {
        dockChatPanel();
      } else {
        undockChatPanel();
        document.getElementById('chat-panel').classList.add('open');
      }
    }
    if (autoCollapsedSidebar && sidebarCollapsed) { toggleSidebar(); autoCollapsedSidebar = false; }
    document.body.classList.remove('on-assistant');
  }
}

// ── ASSISTANT TAB ──────────────────────────────────────────────────────────
function prefillAssistant(btn) {
  const input = document.getElementById('assistant-input');
  input.value = btn.textContent.trim();
  input.focus();
  autoResizeAssistant(input);
}

function quickAsk(text) {
  switchTab('assistant');
  const input = document.getElementById('assistant-input');
  input.value = text;
  autoResizeAssistant(input);
  sendAssistantMessage();
}

function autoResizeAssistant(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 180) + 'px';
}

function assistantKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendAssistantMessage(); }
}

// ── CLAUDE API INTEGRATION ─────────────────────────────────────────────────
const WORKER_URL = 'https://techops-api.kayla-hurd.workers.dev';
let apiConversationHistory = [];

function initApiState() {
  setApiConnectedUI(true);
}

function setApiConnectedUI(connected) {
  document.getElementById('api-status-badge').style.display = connected ? '' : 'none';
  document.getElementById('kb-status-badge').style.display = connected ? 'none' : '';
  document.getElementById('asst-disclaimer').innerHTML = connected
    ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> AI-powered responses — always review before sending to a provider.'
    : '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Responses are based on the TechOps knowledge base — always review before sending to a provider.';
}

function buildSystemPrompt() {
  const name = currentUser ? currentUser.name : 'Kayla';
  const profile = getStyleProfile(name);
  let caseContext = '';
  if (chatCaseId) {
    const c = MOCK_QUEUE.find(q => q.id === chatCaseId);
    if (c) {
      caseContext = `\nACTIVE CASE: #${c.id}: ${c.subject}\nProvider: ${c.provider}\nThread:\n${c.thread.map(m => `[${m.role === 'provider' ? 'Provider' : 'TechOps'}]: ${m.body}`).join('\n\n')}\n`;
    }
  }
  const kbList = ISSUES.map(i => `- ${i.title}: ${i.description}`).join('\n');
  const queueList = MOCK_QUEUE.map(q => `- ${q.id}: ${q.subject} (Provider: ${q.provider}, Status: ${q.status})`).join('\n');
  const teamKB = localStorage.getItem('techops_team_kb') || '';
  return `You are the TechOps Assistant for LocumTenens.com, helping TechOps support agents draft provider email responses, troubleshoot issues, and answer questions quickly and accurately.

CURRENT AGENT: ${name}
SIGNING OFF AS: ${name}. Use this name at the end of any email drafts.
${name === 'Becky' ? `\nBECKY ROLE NOTE: In addition to standard TechOps work, Becky is the primary coordinator for telehealth booking logistics. She handles all questions about telehealth equipment (who is supplying it, shipping, workstation specs, equipment retrieval, and booking status updates). Her telehealth emails go to internal colleagues (recruiters, coordinators), not providers, so the tone is brief and casual. She manages Lenovo laptops and Dell 4K monitors (Dell S2725QC). Equipment ships via FedEx (roughly $200 each way). There is also a Telehealth Help Desk at thhelpdesk@locumtenens.com for provider-side technical issues during telehealth sessions. When writing telehealth-related emails as Becky, use short casual internal language, not formal provider-facing templates.` : ''}

${caseContext}

KNOWLEDGE BASE:
${kbList}
${teamKB ? `\nTEAM EMAIL PATTERNS (real examples of how each agent responds; use these to match tone, routing, and phrasing per person):\n${teamKB}` : ''}

VERBATIM STYLE EXAMPLES: Real emails pulled from the shared mailbox. When generating a reply for a specific agent, match their exact tone, greeting style, sentence structure, and sign-off from these examples. These override generic phrasing.

--- KAYLA ---

Issue: Axuall not syncing to Salesforce
Incoming: "Dr. Eric J Gardner shared his credentialing application in Axuall on Monday, March 23rd at 7:49pm, but it has not carried over to Salesforce. Provider External Id 11445248. He is due to start on 4/6/26, and we must complete the privileging process with the facility ASAP. Can you please assist in getting this pulled over?"
Kayla reply: "Hi Melissa! I will send this over to the dev team to sync his credentialing application, and let you know once I hear back. Best, Kayla"

Issue: Credentialing portal mobile error (initial response)
Incoming: "I have a clinician Kristen Finley who is having some trouble completing her credentialing. She keeps getting error messages and is not allowed to proceed."
Kayla reply: "Hi David! We are so sorry she is having trouble accessing her credentialing application. Sometimes when clinicians try to open Credentials → Credentialing Overview on their phone, they may see the message 'Oh no, something is definitely broken.' Even though it looks like an error, it's actually a known mobile compatibility issue. I would recommend having her access the credentialing application on her phone using this direct link: https://portal.locumtenens.com/#/credentials/overview. If possible, we usually recommend completing credentialing on a desktop or laptop, as that tends to work the most smoothly. Let me know if she continues to have any trouble! Best, Kayla"

Issue: Credentialing resolved (follow-up)
Kayla: "Hi David! Sorry for the delay in update, but it looks like Kristin Finley was able to access her credentialing application. It seems she has just a few more tasks to complete. Let me know if you have any questions! Best, Kayla"

Issue: Kimedics invitation sent (after dev team added approver)
Incoming: "LT team can you confirm these timesheets have been sent to client?"
Kayla reply: "Hi Chris! They just got back to me and let me know they were able to get that updated. I went ahead and sent over an invitation email to Sandy Brown. [Kimedics invite link] Let me know if you have any questions! Best, Kayla"

Issue: Multiple applications missing from Salesforce — escalation to dev team (initial)
Incoming: "We are missing several clinicians' credentialing applications from Salesforce. Brian Churchman and others have completed in Axuall but nothing has synced over."
Kayla reply: "Hi Lucie! I will send this over to the dev team to take a look, and let you know once I hear back! Best, Kayla"

Issue: Credentialing application now in Salesforce (sync resolved update)
Incoming: follow-up on a sync ticket for Chidozie Chimoeze
Kayla reply: "Hi Lucie! As an update, Chidozie Chimezies credentialing application is now in SF. Let me know if you have any questions! Best, Kayla"

--- ALEJANDRO ---

Issue: Kimedics invitation (new timesheet approver)
Incoming: "We have a new timesheet approver for BKG-1148185 as our previous approver is retiring. Can you add Brooke Crist as the new timesheet approver for this booking?"
Alejandro reply: "Hi Will, Happy Friday. I hope you're having a great day! I've sent an invitation email to Brooke. If she doesn't see it in her inbox, I recommend checking her Spam/Junk folder, as the message will come from portal@kimedics.com. It may also help to ensure that emails from Kimedics aren't being blocked by her IT team. In the meantime, here's a direct link Brooke can use to create her account if the email doesn't come through: [Kimedics invite link] I hope this helps! Let me know if you need anything further. Regards, Alejandro Guerrero"

Issue: Kimedics email address corrected
Incoming: "We had an incorrect email for her, it is actually Brooke Crisp, brooke.crisp@tn.gov. She was able to get in and create an account, but the validation email is not coming through for her. Can we try and resend or update her email in the system?"
Alejandro reply: "Hi Will, I hope you're doing well today! No problem; it happens. I have updated her email on Kimedics, so she should now be able to receive the validation email. I hope this helps! Regards, Alejandro Guerrero"

Issue: Credentialing tab visibility / Portal Invite Sent By field missing
Incoming: "Hi, I'm reaching out because one of our providers, Elizabeth Moll, is stating that she is not seeing the Credentialing tab when she logs in."
Alejandro reply: "Hi Stefanie, After reviewing the account, it appears that the Credentialing tab is now available for the provider. I did notice that the 'Portal Invite Sent By' field is missing in Salesforce. It may be worth populating that field, as it ensures a proper connection between the provider and the Clinician Portal. Alternatively, resending the invitation should correct that as well. Please let us know if the provider continues to experience any problems. I hope you both have a great weekend ahead! Regards, Alejandro Guerrero"

Issue: Credentialing docs not syncing — escalation to dev team (initial)
Incoming: "Dr. Kuckelman applied in Axuall but nothing has come over to Salesforce and it still shows Application Started."
Alejandro reply: "Good Morning Stephanie, Thank you for bringing this to our attention. I'll share this with our dev team and circle back with findings and next steps as soon as possible. Regards, Alejandro Guerrero"

Issue: Application Started resolved — docs and app synced after review
Incoming: "Hi, This provider applied but it still shows Application Started and we don't see her documents. Can you check?"
Alejandro reply: "Good morning Stefanie and Nancy, I hope you're doing well this morning! After reviewing Dr. Kuckelman's account, I noticed that the credentialing application and other documents have successfully synced. Is there anything specific that you find missing? If so, let us know, and we can coordinate with the development team to ensure it gets transferred over. Regards, Alejandro Guerrero"

--- BECKY ---

Issue: Credentialing app mobile error (initial response)
Incoming: "One of our clinicians is trying to complete his cred app but it's marked as incomplete in our system and I believe that is causing the issue - he keeps getting the below error message. Could you please take a look and let us know what the next step is?"
Becky reply: "Hi there, Thank you for reaching out! TGIF! The error message the provider is seeing is actually a known issue that occurs when attempting to complete the credentialing application on a mobile device. While it may appear that something is broken, this is a mobile compatibility issue and not related to the application status itself. As a workaround, the provider can try accessing the credentialing application directly using the link below: https://portal.locumtenens.com/#/credentials/overview. For the best experience, we do recommend completing the credentialing application on a desktop or laptop, as this tends to be the most reliable and helps avoid this error. Please let me know if they continue to experience issues after trying the above, and I'd be happy to assist further! Thank you, Becky"

Issue: LTOE login / can't find credentialing tab (initial)
Incoming: "Dr. Swierkosz is having trouble logging into the LTOE... when he logs in now using the 'Access Online Application' link, he's unable to find the credentialing tab."
Becky reply: "Hi Julia, Thank you for reaching out. It would be helpful to ask the provider for a screenshot of what he is seeing when he logs in. That will allow us to confirm exactly where he is getting stuck and better assist him. Just to clarify the platforms: LTOE is our general website. When providers begin credentialing, they select the Credentialing tab within the portal and are then redirected to a separate third-party site called Axuall. The name correction should not impact his access, but once we review a screenshot, we can confirm and advise on next steps. I will follow up this email with credentialing instructions you can keep and share with all your providers who need to begin the credentialing process (the LTOE invite link is just for them to verify their account and DOES NOT take them to their credentialing application). Thank you, Becky"

Issue: Credentialing app — nothing happening when clicking button
Becky reply: "I'm so sorry for the delay, and thank you for staying on top of this for Dr. Swierkosz! I completely understand wanting us to call him. At this time, though, our team does not have the bandwidth to call providers unless a confirmed technical error has occurred. We're always happy to step in for true system issues, but we're not able to walk providers through accessing or completing the credentialing application. He just needs to select 'Authenticate my account' to access his credentialing application. If he is clicking the green button and 'nothing is happening' we recommend swapping to Google Chrome. If he encounters an actual error message or something that appears broken, please send a screenshot and we'll jump in right away. Thank you so much, Julia! Becky"

Issue: Credentialing resolved (Google Chrome fix)
Becky: "Hi Julia, I just spoke with him, swapping to Google Chrome resolved his issues. He is working on the application now."

Issue: Docs not syncing from Axuall to Salesforce
Incoming: "I'm reaching out because a number of clinician's credentialing application has not yet synced from Axuall to Salesforce."
Becky reply: "Good morning Lucie, I hope you had a good weekend! I will review both of these accounts and send them to the Development team, if necessary. Thank you! Becky"

Issue: Kimedics approver not receiving invite
Incoming: "This same client is having another issue stating they have not received the link to approve our providers time sheet. Is there any way to look into this?"
Becky reply: "Hi Garen, Other than BKG-1154376, can you let me know what other bookings to look into? Additionally, what is the timesheet approver's name? I can look into this! Thanks, Becky"

Issue: Provider called in directly — LTOE invite sent while recruiter follows up
Incoming: provider (Heather Anderson) called the shared line looking for next steps; recruiter Audrey hadn't yet followed up
Becky reply: "Hi Audrey! I received a call from Heather Anderson just now. She mentioned that she is interested in working with us but has not yet heard back from an associate regarding next steps. I wanted to let you know in case you'd like to follow up directly with her. In the meantime, I also sent her an invitation to the Online Experience so she can begin exploring the platform. Please let me know what you'd prefer. Thank you, Becky"

Issue: How to access credentialing — step-by-step instructions for provider
Incoming: recruiter asking how to walk provider Mohamed Humad through starting credentialing
Becky reply: "Here are some instructions that can be shared with the provider as well on how to get started! 1. Log in to the LTOE portal. 2. Select the Credentials tab. 3. Click Credentialing Overview. 4. Click 'Get Started' or 'Authenticate my account' to be redirected to Axuall where the credentialing application is completed."

Issue: Axuall status discrepancy — Overview vs Details view
Incoming: "The provider's status shows Deactivated in the Overview/My Clinicians view but she says she's been active — are we doing something wrong?"
Becky reply: "Great question, you're not doing anything wrong here. The Overview/My Clinicians view isn't always the most accurate for login activity or status. I recommend clicking into Details to see the true last login, as that view tends to be more reliable. The 'Deactivated' status can also be misleading and typically updates once the provider submits their application, so it's not uncommon to see inconsistencies between tabs. Thank you, Becky"

Issue: Sync issue initial response — last name mismatch investigation
Incoming: "Carena Walcott's credentialing application has not synced from Axuall to Salesforce."
Becky reply (initial): "Hi Lucie, TGIF! Thank you for flagging this for us. We will take a look into the syncing issue between Axuall and Salesforce. At this time, nothing further is needed from your end. Thank you, Becky"
Becky follow-up (investigating): "Is Carena associated at all with the last name Harding? Was it her maiden name by chance?"
Becky follow-up (confirmed root cause): "The Devs confirmed a last name mismatch: The last name retrieved from Salesforce 'Walcott' does not match the last name retrieved from Axuall 'Harding' for NPI 1578034989. Please update the last name in Axuall to resolve."

NOTE — BECKY'S TELEHEALTH COORDINATION ROLE: Becky is the primary point of contact for telehealth booking logistics. She handles all questions related to telehealth equipment, booking status (who is supplying equipment), shipping, workstation specs, and equipment retrieval. These emails are mostly internal (to recruiters and coordinators), not to providers. Her tone in these is very brief and casual. The examples below are her actual responses.

Issue: New telehealth booking — who is supplying equipment? (standard inquiry)
Incoming: automated alert that a booking was switched to telehealth with "LT will supply equipment" set, no prior telehealth history with this client
Becky reply: "Good morning, I wanted to confirm that LT will be providing the telehealth equipment for this booking (BKG-1157514). Historically, our bookings with Deaconess have been on-site, so we have not previously supported telehealth services with this account. If we are supplying the equipment, would you please connect me with the client's IT team? I'd like to review their technical specifications to ensure the radiology workstation we provide meets their requirements. Thank you, Becky"

Issue: Telehealth booking — who is supplying? (generic inquiry for hybrid bookings)
Incoming: booking switched to hybrid remote, equipment supplier not specified
Becky reply: "Good morning! This booking was switched to hybrid remote but does not indicate who is supplying the telehealth equipment. Do you know what the provider is using to see patients? Thanks, Becky"

Issue: Telehealth booking — marking as client will supply (after confirmation)
Incoming: recruiter confirms client is supplying or provider is just taking call with no equipment needed
Becky reply: "Thank you! I will mark it as client will supply and just make a note that the provider is just taking call and no equipment is needed."

Issue: Telehealth booking — marking as provider has own equipment
Incoming: recruiter confirms provider is using their own equipment
Becky reply: "Sounds good, thank you! Would you mind marking it as 'provider has own'? Thanks! Becky"

Issue: Telehealth booking — equipment already at provider from previous assignment
Incoming: question about whether LT needs to send equipment for a new booking
Becky reply: "Hey yes! But Dr. Masi already has equipment from a previous assignment that he was going to keep."

Issue: Telehealth booking — client using their own equipment (employee provider)
Incoming: recruiter confirms provider is an employee of the health system and will use their work laptop
Becky reply: "The client is, he is using his work laptop (he is an employee of Parkview health system)."

Issue: Telehealth booking — delayed start, following up on status
Incoming: booking start date not yet confirmed with client
Becky reply: "Good morning, Alex, Any update here? No worries if not :) Thanks, Becky"

Issue: Telehealth booking — checking back in after waiting a couple weeks
Becky reply: "No worries! Thanks! I'll check back in in a couple of weeks :)"

Issue: Equipment shipping — incorrect address, FedEx returned shipment
Incoming: FedEx was unable to deliver because of a missing suite number; address looks like a business not a home
Becky reply: "Hi! I received a call from FedEx over the weekend regarding the equipment shipped to Dr. Ling. They were unable to deliver because they were missing a suite number. The address provided does not appear to be a home address, after looking it up it looks like an eye center. FedEx has to ship the equipment back to us; they are unable to correct the current mailing address. Could you confirm with Dr. Ling a proper shipping address? Becky"

Issue: Equipment shipping — educating recruiter on FedEx costs for telehealth bookings
Incoming: recruiter asked to cancel a shipment after address issues
Becky reply: "Just a quick note for future telehealth/hybrid bookings: when equipment is needed, the FedEx shipping costs can add up pretty quickly. It's usually a couple hundred dollars to send the equipment out and another couple hundred to have it returned. I completely understand that sometimes it's necessary, but I just wanted to share that context so it can be kept in mind when adding those types of bookings. Thanks so much! Becky"

Issue: Workstation specs — confirming equipment to client who has concerns about monitor quality
Incoming: client expressing concern that Dr. Solomon's monitor may not be suitable for diagnostic radiology
Becky reply: "We completely understand your concerns. Yes, Dr. Solomon is operating on a Lenovo laptop, and two Dell 4k monitors (model Dell S2725QC). The specs for this workstation were approved by [Client Name] [date]. I have attached the communication for reference."

Issue: Workstation swap request — asking for more details before acting
Incoming: recruiter asking to swap out a provider's workstation for a newer one ASAP
Becky reply: "Hi Hunter, May we please have more details as to why Dr. Solomon needs a new workstation? Becky"

Issue: Equipment retrieval — noting history of unreturned equipment
Incoming: booking involves provider who had LT equipment previously
Becky reply: "We have also been trying to retrieve our equipment from him since October of last year. He mentioned that it is currently in storage."

Issue: Booking with LT Helpdesk loop-in (internal, brief)
Incoming: recruiter needs LTOE/booking assistance that requires LT Helpdesk
Becky reply: "Hey [Name]! Looping in @LT Helpdesk! Happy Friday!"

--- NOAH ---

Issue: LTOE locked account / forgot password (initial response)
Incoming: "I am working with a provider trying to assist her in accessing her timesheet. When logging in, she gets a security message saying she is locked out of her account for security purposes and to try again later. Is there a way we can bypass this on our end? She also needs her LTOE log-in changed."
Noah reply: "Good morning Jaxson, I hope you had a great weekend! It sounds like her account may be locked due to too many incorrect password attempts. In the meantime, she can try logging in using her current LTOE username and select \"Forgot Password\" to reset her password and regain access. If this happens to other providers, using the \"Forgot Password\" option should allow her to reset the password and log in. @LT Helpdesk will be able to assist with updating her LTOE Username. I've looped them in here to assist! Best regards, Noah C."

Issue: Timesheet / LTOE access escalation
Incoming: "Can we ensure Kyra Compton has production access to LTOE Timesheets? Her view is only showing expenses currently."
Noah reply: "Hey Jenna! I hope the day is going well. I believe @LT Helpdesk should be able to assist with this. I've looped them in here. Best regards, Noah C."

Issue: Axuall reactivation request (email to Axuall support)
Noah reply: "Good afternoon, I hope the day is going well! It looks like Dr. Bathsheba A. Wariso (NPI: 1316525686) was deactivated in Axuall. However, she still has active credentials with us. Is it possible to get her Reactivated? Thank you! Best regards, Noah C."

Issue: Resolved — IT/laptop/computer issue (update to recruiter)
Incoming: "Please see message below from Dr. Fredrick — laptop not working, OneDrive license issue."
Noah reply: "Hey Clint, As another update, Dr. Fredrick is good to go. I was able to assist her with getting her computer back on and ensuring that she can download her files properly. Best regards, Noah C."

Issue: LTOE username / why resending invite doesn't update email
Incoming: "The provider's email changed and we resent the invite but she says she's still not getting it at the new address."
Noah reply: "Good morning Abigail, I hope your day is going well! This is happening because once an LTOE invitation is sent, the email address used becomes the provider's LTOE username. After the username is set, updating the contact email and resending the invitation will not be sent to the new address. To update the LTOE username to a different email after an invite has already been sent, LT Helpdesk will need to assist. I've included them on this email to help with that update. I hope this explanation was helpful! Best regards, Noah C."

Issue: Directing to TechOps email + LTOE username update via LT Helpdesk
Incoming: provider or recruiter reaching out directly to Noah's personal email for help
Noah reply: "Good afternoon, Happy Friday! To reach the TechOps team, please use techopshelpdesk@locumtenens.com. Additionally, to update the LTOE Username, @LT Helpdesk will be able to assist! I've included them here. Best regards, Noah C."

Issue: Document upload format error — wrong file type for CME documents
Incoming: "Dr. Weber has been trying to upload her CME documents but keeps getting errors — can you upload them on our behalf?"
Noah reply: "Good afternoon Julia, I hope you had a great weekend! Our team isn't able to upload documents on behalf of clinicians. Those will need to be uploaded directly by the provider. That said, I did notice that the files being uploaded were in .jpeg format. The headshot section does accept .jpeg files, but the CME documents will need to be uploaded as .pdf or .docx files. If it's helpful, you're welcome to send those files over and we can convert them to the correct format for you. Best regards, Noah C. LT Technical Operations"

Issue: Provider uploading to Document Library instead of credentialing app — also popup/Chrome fix
Incoming: provider Dr. Salib uploading docs to Document Library but they aren't showing up in her application; also getting popup errors
Noah reply: "Good afternoon Alli, I hope the day is going well! After reviewing her account, it appears that Dr. Salib has been attempting to upload documents into the LTOE Document Library instead of the credentialing application in Axuall. The Document Library is a separate section intended for use after credentialing is complete. To upload documents to the credentialing application, she'll need to log in to LTOE, navigate to Credentials, click Credentialing Overview, and select Authenticate my account to be redirected to Axuall. If the redirect doesn't happen, it's likely due to popup blockers in browsers like Safari on Mac, iPhone and iPad. To resolve this, we recommend using Google Chrome. I hope this helps! Best regards, Noah C. LT Technical Operations"

Issue: Credentialing not syncing — provider missing Axuall ID (internal note to dev team)
Incoming: (internal) provider Furrukh Malik completed cred app but documents haven't synced to Salesforce; no Axuall ID visible
Noah reply: "Good afternoon, I hope the day is going well! We were just informed that Furrukh Malik (NPI: 1790776672) completed his cred app 1/22/26 2:30 pm. Documents and data have not been synced into our SF yet. I noticed that he does not have an Axuall ID yet, which I believe is a part of the issue. Is this something that can be added? Thank you! Best regards, Noah C."

Issue: Provider resolved — connected and good to go (brief follow-up)
Noah reply: "Hello again! Just got off the phone with Dr. Shengelia and she's connected and good to go. Best regards, Noah C."

CURRENT QUEUE:
${queueList}

KEY FACTS:
- Support line: 877-732-7080 (Monday through Friday, 8:30 AM to 5:30 PM EST)
- TechOps email: techopshelpdesk@locumtenens.com
- System emails from: LT_OnlineServices@locumtenens.com

CONTACT INFO IN EMAILS: Only include the phone number and email address (877-732-7080 / techopshelpdesk@locumtenens.com) when the issue is being escalated, is unresolved, or the provider needs to reach a specific team. Do not include it as a standard closing on every email.

LOGIN/PASSWORD: Use Forgot Password on login page. Locked accounts unlock after reset OR 30-min wait. TechOps cannot manually unlock accounts.

CREDENTIALING ACCESS: locumtenens.com → Log In → CREDENTIALS → Credentialing Overview → Get Started or Authenticate your account → redirects to Axuall. If redirect fails: popup blocker. Recommend Chrome. Safari: disable popup blocker. Chrome help: https://support.google.com/chrome/answer/95472 Safari help: https://support.apple.com/guide/safari/sfri40696/mac. Also try: clear cache, enable third-party cookies, different device.

MISSING CREDENTIALS TAB: LTOE username must match SF email. Check in SF: Details tab → LTOE Username. SF email cannot be changed if portal verified. Ticket lthelpdesk@locumtenens.com.

DOCUMENT LIBRARY: For after credentialing is complete only. Documents uploaded there before finishing the app won't appear in Axuall.

CLINICIAN PORTAL INVITE: Only verifies the account. Does NOT start credentialing. Provider must still go through Credentialing Overview.

AXUALL IDENTITY VERIFICATION FAILURE: Provider must call Axuall Support at 888-298-1730. TechOps cannot make corrections. Common causes: name mismatch, DOB/SSN mismatch.

AXUALL PRE-POPULATION: Auto-fills licenses, certs, basic demographics after identity verification. Must be manual: personal contact info, attestation questions, narrative fields, employment history.

DOCUMENT SYNC: Takes up to 24 hours to sync from Axuall to SF. Normal. Do not open a ticket.

SYNC FAILURE — PREVENTION AND ROOT CAUSES: If asked how to prevent sync issues or what causes them, share these best practices: (1) Check for duplicate accounts — if a duplicate exists, LT Helpdesk must merge it; an NPI on the wrong/duplicate account disrupts the sync and should be removed. (2) Verify SSN matches between Axuall and Salesforce — mismatches cause sync failures. (3) Check for last name mismatches between Axuall and Salesforce. When a sync failure does occur, the dev team manually forces the sync since automatic sync failed. They are aware and working on a full fix.

MOBILE ERROR "SOMETHING IS DEFINITELY BROKEN": Known mobile issue. Direct mobile link: https://portal.locumtenens.com/#/credentials/overview. Recommend desktop when possible.

JH IT SUPPORT: http://dna.jacksonhealthcare.com → Fix an IT Problem. Immediate help: 770-643-5602.

TIMESHEET FORWARDING REQUESTS: When an external contact (facility rep, staffing coordinator, etc.) asks to receive or approve timesheets for a provider. TechOps DOES handle this. Workflow: (1) Add the person in Salesforce, (2) Send them a Kimedics invite. Draft a response confirming you sent the invite and include a [Kimedics invite link] placeholder they'll replace before sending. Do not say TechOps doesn't handle this.

KIMEDICS INVITES: Always include a [Kimedics invite link] placeholder at the bottom of any Kimedics invite email. The agent will paste in the real link before sending. Invite emails always come from portal@kimedics.com. Tell the recipient to check Spam/Junk if they don't see it.

SF CLOSING SUMMARY: If asked to summarize a case (e.g. "summarize CASE-00338220" or "write a closing summary for [case]"), write 1-3 sentences in first person as ${name}. Cover who reached out, what the issue was, and how it was resolved. The case is complete. End with the provider's pronoun based on context — "She is gtg.", "He is gtg.", or "They are gtg." Default to "They are gtg." if unclear. Do not include labels or headers — just the summary text.

INPUT TYPES — handle each appropriately:
- Pasted email from a provider: Extract the provider's name from the email greeting or signature. Identify the issue from the email body. Draft a reply to that specific email. Do not summarize the email back to the agent — just identify and reply.
- A few words or a topic (e.g. "popup blocker", "can't log in", "missing credentials tab"): Immediately draft the standard response email for that issue. Do not ask for more details unless the issue is genuinely ambiguous between two very different problems.
- Agent's own description of a situation: Identify the most likely issue and draft the appropriate email.

RESPONSE FORMAT — always follow this structure:
1. One sentence identifying the issue (e.g. "This looks like a popup blocker issue.")
2. Then immediately provide the full email draft, ready to copy and send — formatted with greeting, body, steps if needed, and closing signed "${name}"
3. Do not give the agent bullet points or steps — put those inside the email for the provider instead
4. If the issue is truly unclear and could be multiple very different things, ask one targeted question or request a screenshot using the standard template
5. Keep your intro sentence short — the email is the main thing

PROVIDER NAME: If you can identify the provider's name from the input, use it in the email greeting. If not, use "Hi!" as the greeting.

Write in ${name}'s voice: warm, professional, helpful. Address providers by name, use Dr. if applicable. NEVER use em dashes (the — character) anywhere in the email body. Use a comma, period, or rewrite the sentence instead. Never use emojis. Plain text email format only.${profile.instructions ? `\n\nPERSONAL INSTRUCTIONS FROM ${name.toUpperCase()}, always follow these:\n${profile.instructions}` : ''}`;
}

function renderMarkdown(text) {
  // Auto-link known URLs before any other processing
  const linked = text.replace(/(https?:\/\/[^\s<>"]+)/g, url => {
    const label = URL_LABELS[url] || url;
    return `<a href="${url}" target="_blank" rel="noopener" style="color:var(--lt-blue);text-decoration:underline;">${label}</a>`;
  });
  return linked
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code style="background:var(--bg);padding:1px 5px;border-radius:3px;font-family:monospace;font-size:12px;">$1</code>')
    .replace(/^### (.+)$/gm, '<div style="font-weight:700;font-size:13px;margin:10px 0 4px;color:var(--text);">$1</div>')
    .replace(/^## (.+)$/gm, '<div style="font-weight:700;font-size:14px;margin:12px 0 5px;color:var(--text);">$1</div>')
    .replace(/^[-•\*] (.+)$/gm, '<div style="display:flex;gap:7px;margin:3px 0;"><span style="color:var(--brand);flex-shrink:0;">•</span><span>$1</span></div>')
    .replace(/^(\d+)\. (.+)$/gm, '<div style="display:flex;gap:7px;margin:3px 0;"><span style="font-weight:700;color:var(--brand);min-width:16px;flex-shrink:0;">$1.</span><span>$2</span></div>')
    .replace(/<\/div>\n\n<div/g, '</div><div')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

async function callWorkerAPI(userMessage) {
  apiConversationHistory.push({ role: 'user', content: userMessage });
  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: buildSystemPrompt(),
      messages: apiConversationHistory
    })
  });
  if (!response.ok) {
    apiConversationHistory.pop();
    const err = await response.json();
    throw new Error(err.error?.message || 'Worker error');
  }
  const data = await response.json();
  const reply = data.content[0].text;
  apiConversationHistory.push({ role: 'assistant', content: reply });
  return reply;
}

async function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  const msgs = document.getElementById('chat-messages');
  const escaped = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  msgs.innerHTML += `<div class="chat-msg user"><div class="chat-bubble user">${escaped}</div></div>`;
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;

  const typingId = 'chat-typing-' + Date.now();
  msgs.innerHTML += `<div class="chat-msg bot" id="${typingId}"><div class="chat-bubble bot"><div class="asst-typing"><span></span><span></span><span></span></div></div></div>`;
  msgs.scrollTop = msgs.scrollHeight;

  try {
    const reply = await callWorkerAPI(text);
    document.getElementById(typingId)?.remove();
    const rendered = renderMarkdown(reply);
    const msgId = 'chat-msg-' + Date.now();
    msgs.innerHTML += `<div class="chat-msg bot" id="${msgId}">
      <div class="chat-bubble bot">${rendered}</div>
      <div class="asst-msg-actions">
        <button class="asst-action-btn" onclick="copyMsgText('${msgId}', this)">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copy
        </button>
      </div>
    </div>`;
    msgs.scrollTop = msgs.scrollHeight;
  } catch (err) {
    document.getElementById(typingId)?.remove();
    msgs.innerHTML += `<div class="chat-msg bot"><div class="chat-bubble bot" style="color:var(--warn);">Something went wrong. Try again.</div></div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }
}

async function sendAssistantMessage() {
  const input = document.getElementById('assistant-input');
  const text = input.value.trim();
  if (!text) return;

  const msgs = document.getElementById('assistant-messages');
  const placeholder = document.getElementById('asst-placeholder');
  if (placeholder) placeholder.remove();

  const escaped = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  msgs.innerHTML += `<div class="asst-msg user"><div class="asst-bubble">${escaped}</div></div>`;
  input.value = '';
  autoResizeAssistant(input);
  msgs.scrollTop = msgs.scrollHeight;

  // Always go to the AI — no branch interruption in the assistant tab.
  // The AI has full KB and email context and can handle any situation intelligently.

  // Show typing indicator
  const typingId = 'typing-' + Date.now();
  msgs.innerHTML += `<div class="asst-msg bot" id="${typingId}"><div class="asst-bubble asst-typing"><span></span><span></span><span></span></div></div>`;
  msgs.scrollTop = msgs.scrollHeight;

  try {
    // If the message references a specific case, inject its thread for context
    let apiMessage = text;
    const caseRefMatch = text.match(/CASE-\d+/i);
    if (caseRefMatch) {
      const referencedCase = MOCK_QUEUE.find(q => q.id.toLowerCase() === caseRefMatch[0].toLowerCase());
      if (referencedCase) {
        const thread = referencedCase.thread.map(m => `[${m.role === 'provider' ? 'Provider' : 'TechOps'}]: ${m.body}`).join('\n\n');
        apiMessage = `${text}\n\n--- Case Thread for ${referencedCase.id} ---\nSubject: ${referencedCase.subject}\nProvider: ${referencedCase.provider}\n\n${thread}`;
      }
    }
    const reply = await callWorkerAPI(apiMessage);
    document.getElementById(typingId)?.remove();
    const msgId = 'asst-msg-' + Date.now();
    const rendered = renderMarkdown(reply);
    let html = `<div class="asst-msg bot" id="${msgId}">
      <div class="asst-bubble">${rendered}</div>
      <div class="asst-msg-actions">
        <button class="asst-action-btn" onclick="copyMsgText('${msgId}', this)">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copy
        </button>
      </div>
    </div>`;
    msgs.innerHTML += html;
    msgs.scrollTop = msgs.scrollHeight;
  } catch (err) {
    document.getElementById(typingId)?.remove();
    // Fallback to keyword matching (no branch — always try to give a direct response)
    const result = buildAssistantReply(text);
    const { reply, detailHtml, emailDraft } = result;
    const msgId = 'asst-msg-' + Date.now();
    const replyText = reply.replace(/<[^>]+>/g, '');
    const emailAttr = emailDraft ? ` data-email="${emailDraft.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}"` : '';
    let html = `<div class="asst-msg bot" id="${msgId}">
      <div class="asst-bubble">${reply}</div>`;
    if (detailHtml) html += detailHtml;
    html += `<div class="asst-msg-actions">
      <button class="asst-action-btn" onclick="copyMsgText('${msgId}', this)" data-full="${replyText.replace(/"/g,'&quot;')}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copy
      </button>${emailDraft ? `
      <button class="asst-action-btn" onclick="copyEmailOnly('${msgId}', this)"${emailAttr}>
        ✉️ Copy email only
      </button>` : ''}
    </div></div>`;
    msgs.innerHTML += html;
    msgs.scrollTop = msgs.scrollHeight;
  }
}

function selectBranchInChat(promptEl, issueId, branchKey) {
  const issue = ISSUES.find(i => i.id === issueId);
  if (!issue || !issue.emailBranches) return;
  const branch = issue.emailBranches[branchKey];
  if (!branch) return;
  const emailBody = branch.body;
  let html = `<div class="asst-detail-card">
    <div class="asst-detail-card-header">
      <span style="font-size:14px;">${issue.icon || '🔧'}</span>
      <div class="asst-detail-card-label">${issue.title}</div>
      <button class="btn btn-copy btn-sm" style="margin-left:auto;" data-copy="${emailBody.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" onclick="copyDetailCard(this)">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copy
      </button>
    </div>
    <div class="asst-detail-card-body">
      <pre style="white-space:pre-line;font-family:inherit;font-size:13px;line-height:1.7;margin:0;">${renderTemplateBody(emailBody)}</pre>
    </div>
  </div>`;
  if (branch.escalationNote) {
    const note = branch.escalationNote;
    html += `<div class="asst-detail-card" style="margin-top:8px;">
      <div class="asst-detail-card-header">
        <span style="font-size:14px;">📝</span>
        <div class="asst-detail-card-label">Internal Escalation Note</div>
        <button class="btn btn-copy btn-sm" style="margin-left:auto;" data-copy="${note.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" onclick="copyDetailCard(this)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copy
        </button>
      </div>
      <div class="asst-detail-card-body">
        <p style="font-size:13px;line-height:1.7;margin:0;color:var(--muted);">${note.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p>
      </div>
    </div>`;
  }
  const fragment = document.createRange().createContextualFragment(html);
  promptEl.replaceWith(fragment);
}

function buildAssistantReply(text) {
  const lower = text.toLowerCase();

  // Follow-up email request
  if (/follow.?up|no reply|hasn.t replied|haven.t heard/i.test(lower)) {
    const name = chatCaseId ? (MOCK_QUEUE.find(q => q.id === chatCaseId) || {}).provider || '[Name]' : '[Name]';
    const first = name.split(' ')[0];
    const draft = `Hi ${first},\n\nJust wanted to follow up on my previous message. Were you able to give it a try? Let us know if you are still running into any trouble, we are happy to help!\n\nBest,\nKayla`;
    return {
      reply: `Here's a follow-up draft based on ${chatCaseId ? `case ${chatCaseId}` : 'a generic template'}. Edit and send when ready.`,
      detailHtml: buildDetailCard('✉️', 'Follow-Up Draft', `<pre style="white-space:pre-wrap;font-family:inherit;font-size:13px;line-height:1.7;margin:0;">${draft}</pre>`, draft),
      emailDraft: draft
    };
  }

  // Closing summary / SF post
  if (/closing summary|sf post|salesforce post|close.*case|case.*close/i.test(lower)) {
    const fmt = `Issue: [brief description]\nSteps taken: [what you did]\nOutcome: Resolved / Sent instructions / Escalated\nNotes: [anything useful for next person]`;
    return {
      reply: `Paste the closing summary into the <strong>Post tab</strong> in Salesforce, not the Email tab. Keep it 2 to 4 lines.`,
      detailHtml: buildDetailCard('📝', 'SF Closing Summary Format', `<pre style="white-space:pre-wrap;font-family:inherit;font-size:13px;line-height:1.7;margin:0;">${fmt}</pre>`, fmt)
    };
  }

  // Authenticate button not working / popup blocker — check BEFORE general credentialing
  if (/authenticate.*(not work|stuck|nothing|won.t|doesn.t|button|redirect|wont)|popup|pop.up|popups|safari.*block|block.*safari|axuall.*(won.t|wont|not load|blank|open)|redirect.*(not|won.t|doesn.t)/i.test(lower)) {
    const issue = ISSUES.find(i => i.id === 8);
    if (issue) return issueResult(issue);
  }

  // Popup blocker / credentialing
  if (/popup|pop.up|block|credential|document.*open|won.t open/i.test(lower)) {
    const issue = ISSUES.find(i => i.id === 3 || i.keywords.some(k => lower.includes(k)));
    if (issue) return issueResult(issue);
  }

  // Kimedics / timesheet
  if (/kimedics|timesheet|invite.*push|push.*invite|bkg|booking/i.test(lower)) {
    const issue = ISSUES.find(i => i.id === 15 || (i.title && /kimedics/i.test(i.title)));
    if (issue) return issueResult(issue);
  }

  // Oh no / mobile error
  if (/oh no|mobile.*error|something.*broken|broken.*something/i.test(lower)) {
    const issue = ISSUES.find(i => i.keywords && i.keywords.some(k => /oh.no|broken/.test(k)));
    if (issue) return issueResult(issue);
    return {
      reply: `The <strong>"Oh no, something is definitely broken"</strong> error typically shows on mobile.`,
      detailHtml: buildDetailCard('📱', 'Steps', `<div class="asst-step"><div class="asst-step-num">1</div><div>Ask them to try on a desktop browser first</div></div><div class="asst-step"><div class="asst-step-num">2</div><div>If desktop works, it is mobile or app-related. Escalate to the dev team.</div></div><div class="asst-step"><div class="asst-step-num">3</div><div>Include their device type and browser version in the escalation</div></div>`)
    };
  }

  // Password / login
  if (/password|login|sign.?in|can.t log|locked out|reset pass/i.test(lower)) {
    const issue = ISSUES.find(i => i.keywords && i.keywords.some(k => lower.includes(k)));
    if (issue) return issueResult(issue);
    return {
      reply: `Here are the standard steps for password/login issues.`,
      detailHtml: buildDetailCard('🔑', 'Password Reset Steps', `<div class="asst-step"><div class="asst-step-num">1</div><div>Have them click <strong>Forgot Password</strong> on the login page</div></div><div class="asst-step"><div class="asst-step-num">2</div><div>Check spam/junk for the reset email</div></div><div class="asst-step"><div class="asst-step-num">3</div><div>If no email, confirm the address on file in SF</div></div><div class="asst-step"><div class="asst-step-num">4</div><div>Still stuck? Escalate to dev team with their account email</div></div>`)
    };
  }

  // KB keyword search
  const tokens = lower.split(/\W+/).filter(t => t.length > 3);
  let best = null, bestScore = 0;
  ISSUES.forEach(issue => {
    if (!issue.keywords) return;
    const score = tokens.reduce((s, t) => s + (issue.keywords.some(k => k.includes(t) || t.includes(k)) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; best = issue; }
  });
  if (best && bestScore >= 1) return issueResult(best);

  return {
    reply: `I searched the knowledge base but couldn't find a direct match. Try rephrasing, or check the <strong>Knowledge Base</strong> tab to browse all known issues. You can also add a new one there.`,
    detailHtml: null,
    emailDraft: null
  };
}

const URL_LABELS = {
  'https://support.google.com/chrome/answer/95472': 'How to Allow Pop-ups in Chrome',
  'https://support.apple.com/guide/safari/sfri40696/mac': 'How to Allow Pop-ups in Safari (Mac, iPhone & iPad)',
  'https://portal.locumtenens.com/#/credentials/overview': 'Credentialing Application (Direct Mobile Link)',
  'http://dna.jacksonhealthcare.com': 'Jackson Healthcare IT Support Portal'
};

function renderTemplateBody(text) {
  // Strip double newlines for compact display, then HTML-escape, then auto-link known URLs
  const compact = text.replace(/\n{2,}/g, '\n');
  const escaped = compact.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return escaped.replace(/(https?:\/\/[^\s<>"]+)/g, url => {
    const label = URL_LABELS[url] || url;
    return `<a href="${url}" target="_blank" rel="noopener" style="color:var(--lt-blue);text-decoration:underline;">${label}</a>`;
  });
}

function issueResult(issue) {
  if (issue.branches) {
    return { needsBranch: true, issue };
  }
  const shortDesc = issue.description || '';
  let stepsHtml = '';
  if (issue.email && issue.email.steps && issue.email.steps.length) {
    stepsHtml = issue.email.steps.map((s, i) =>
      `<div class="asst-step"><div class="asst-step-num">${i+1}</div><div>${s}</div></div>`
    ).join('');
  }
  const tags = issue.category ? `<span class="asst-tag">${issue.category}</span>` : '';
  const emailBody = issue.email && issue.email.body ? issue.email.body : null;
  const bodyHtml =
    `${tags ? `<div style="margin-bottom:9px;">${tags}</div>` : ''}` +
    `${shortDesc ? `<div style="color:var(--muted);margin-bottom:10px;font-size:12px;">${shortDesc}</div>` : ''}` +
    (stepsHtml
      ? stepsHtml
      : emailBody
        ? `<pre style="white-space:pre-line;font-family:inherit;font-size:13px;line-height:1.7;margin:0;">${renderTemplateBody(emailBody)}</pre>`
        : '');
  return {
    reply: `Found a match in the knowledge base for <strong>${issue.icon || '🔧'} ${issue.title}</strong>.`,
    detailHtml: buildDetailCard(issue.icon || '🔧', issue.title, bodyHtml, emailBody || null),
    emailDraft: emailBody || null
  };
}

function buildDetailCard(icon, title, bodyHtml, copyText) {
  const copyBtn = copyText
    ? `<button class="btn btn-copy btn-sm" style="margin-left:auto;" data-copy="${copyText.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}" onclick="copyDetailCard(this)">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copy
      </button>`
    : '';
  return `<div class="asst-detail-card">
    <div class="asst-detail-card-header">
      <span style="font-size:14px;">${icon}</span>
      <div class="asst-detail-card-label">${title}</div>
      ${copyBtn}
    </div>
    <div class="asst-detail-card-body">${bodyHtml}</div>
  </div>`;
}

function copyDetailCard(btn) {
  copyToClipboard(btn.getAttribute('data-copy'), btn, 'Copy');
}

function copyMsgText(msgId, btn) {
  const el = document.getElementById(msgId);
  if (!el) return;
  const parts = [];
  const bubble = el.querySelector('.asst-bubble');
  if (bubble) {
    let text = bubble.innerText.trim();
    // Strip the intro identification sentence — find where the email draft starts
    const match = text.match(/\n(Hi |Good morning|Good afternoon|Good evening|Hey )/);
    if (match) text = text.slice(match.index + 1).trim();
    parts.push(text);
  }
  el.querySelectorAll('.asst-detail-card-body').forEach(d => parts.push(d.innerText.trim()));
  copyToClipboard(parts.join('\n\n'), btn, 'Copy');
}

function copyEmailOnly(msgId, btn) {
  const el = document.getElementById(msgId);
  if (!el) return;
  // Try data-email attr first (pre-extracted draft), else fall back to detail card pre content
  const emailBtn = el.querySelector('[data-email]');
  if (emailBtn) { copyToClipboard(emailBtn.getAttribute('data-email'), btn, '✉️ Copy email only'); return; }
  const pre = el.querySelector('.asst-detail-card-body pre');
  if (pre) copyToClipboard(pre.innerText.trim(), btn, '✉️ Copy email only');
}

// ── ISSUE #15: KIMEDICS TIMESHEET / INVITE PUSH ───────────────────────────
ISSUES.push({
  id: 15, category: "email", icon: "📲",
  title: "Kimedics Invitation: Sent with Portal Link",
  description: "Send or resend a Kimedics invitation. Select whether you are replying to the invitee directly or to someone who will forward the info.",
  keywords: [
    "kimedics", "kimedics invitation", "kimedics invite", "send kimedics invite",
    "sent kimedics", "kimedics email", "kimedics link", "kimedics portal",
    "portal2.kimedics", "kimedics access", "resend kimedics", "kimedics signup",
    "push", "manual push", "invitation link", "invite link", "send invite",
    "bkg", "booking", "timesheet push", "approver updated", "new poc",
    "point of contact", "can you push", "scheduling app", "shift invite",
    "send a push", "push for", "bkg-"
  ],
  branches: [
    { key: 'toInvitee', label: 'You are replying directly to the invitee' },
    { key: 'toForwarder', label: 'You are replying to someone who will forward the info to the invitee' }
  ],
  emailBranches: {
    toInvitee: {
      subject: "Re: Kimedics Invitation",
      body: `Hi [Provider Name]!\n\nWe have sent a Kimedics invitation to your email. If you do not see it, please check your Spam/Junk folder, as it will come from portal@kimedics.com.\n\nYou can also use this direct link to create your account:\n\n[Kimedics invite link]\n\nLet us know if you need any help!\nBest,\n[Your Name]`
    },
    toForwarder: {
      subject: "Re: Kimedics Invitation",
      body: `Hi [Name]!\n\nI have sent a Kimedics invitation email to [Provider Name]. If they do not see it in their inbox, please ask them to check their Spam/Junk folder, as the message will come from portal@kimedics.com.\n\nHere is a direct link they can also use to create their account:\n\n[Kimedics invite link]\n\nLet us know if you need anything further!\nBest,\n[Your Name]`
    }
  }
});
ISSUE_CASUAL[15]  = "getting their Kimedics invite or timesheet to the right person";
ISSUE_DETAIL[15]  = "The approver or recipient in Salesforce may have been outdated or incorrect.";
ISSUE_ACTION[15]  = "sent a manual push with the updated invite link to the correct contact";

// ── ISSUE #16: DOCUMENT LIBRARY CONFUSION ─────────────────────────────────
ISSUES.push({
  id: 16, category: "cred", icon: "🗃️",
  title: "Uploading to Document Library Instead of Credentialing App",
  description: "Provider is uploading documents to the Document Library instead of completing the credentialing application in Axuall.",
  keywords: [
    "document library", "doc library", "uploaded documents", "documents not in axuall",
    "documents not showing", "documents not appearing", "uploaded but not showing",
    "uploaded to wrong place", "library instead", "wrong section", "wrong area",
    "documents missing axuall", "axuall missing documents", "cant find documents",
    "documents not there", "where are my documents", "document library vs axuall",
    "uploaded already", "already uploaded", "documents dont show", "documents not visible"
  ],
  email: {
    subject: "Action Required: Complete Your Credentialing Application in Axuall",
    body: `Hi [Provider Name],

Thank you for reaching out! It looks like the documents may have been uploaded to the Document Library rather than directly through the credentialing application in Axuall.

Just to clarify:
- The Document Library is intended for uploading additional documents after the credentialing application has been completed.
- Documents uploaded to the Document Library before the application is finished will not appear in Axuall.

To get started with the credentialing application, please follow these steps:

1. Log in at www.locumtenens.com using the email address on file.
2. Click the Log In button.
3. Click CREDENTIALS from the top navigation menu.
4. Select Credentialing Overview.
5. Click "Start My Re-Credentialing Application" (or follow the prompts to begin).
6. This will redirect you to your credentialing application in Axuall, where you can upload your documents directly.

Please don't hesitate to reach out if you have any questions!

[Your Name]`
  }
});
ISSUE_CASUAL[16]  = "accidentally uploading documents to the Document Library instead of Axuall";
ISSUE_DETAIL[16]  = "The Document Library is for post-credentialing documents only. Documents uploaded there before completing the application will not appear in Axuall.";
ISSUE_ACTION[16]  = "clarified the difference between the Document Library and the credentialing application and sent next steps";

// ── ISSUE #17: JH IT SUPPORT ───────────────────────────────────────────────
ISSUES.push({
  id: 17, category: "portal", icon: "💻",
  title: "Jackson Healthcare IT Support",
  description: "Provider or internal staff needs IT support for Jackson Healthcare systems.",
  keywords: [
    "jackson healthcare", "jackson health", "jh it", "jh support", "dna.jacksonhealthcare",
    "jackson it", "fix an it problem", "it problem", "it ticket", "it support",
    "jackson helpdesk", "jh helpdesk", "internal it", "it request", "support request",
    "770-643-5602", "jackson portal", "it issue", "computer issue", "laptop issue"
  ],
  email: {
    subject: "Jackson Healthcare IT Support",
    body: `Hi [Name],

For IT support related to Jackson Healthcare systems, you have two options:

1. Submit a support request online:
   Go to http://dna.jacksonhealthcare.com and click "Fix an IT Problem" to enter a support request.

2. Call for immediate help:
   Phone: 770-643-5602

Please don't hesitate to reach out if you need anything else!

[Your Name]`
  }
});
ISSUE_CASUAL[17]  = "needing Jackson Healthcare IT support";
ISSUE_DETAIL[17]  = "JH IT can be reached via the DNA portal or by phone for immediate assistance.";
ISSUE_ACTION[17]  = "provided Jackson Healthcare IT support contact information";

// ── ISSUE #18: AXUALL INFO NOT PRE-POPULATING ─────────────────────────────
ISSUES.push({
  id: 18, category: "axuall", icon: "📝",
  title: "Axuall Application Not Pre-Populating",
  description: "Provider reports that information is not filling in automatically on their credentialing application.",
  keywords: [
    "not pre-populating", "not filling in", "not auto filling", "not autofilling",
    "blank fields", "empty fields", "information not there", "info not showing",
    "application is blank", "nothing is filled", "fields are empty",
    "axuall not filling", "axuall blank fields", "pre-populate", "pre populate",
    "auto populate", "autopopulate", "information missing application",
    "why is it blank", "fields not filled", "not populated"
  ],
  email: {
    subject: "Regarding Your Credentialing Application Fields",
    body: `Hi [Provider Name],

Thank you for reaching out! Axuall does automatically pull certain information from verified databases, but not all fields will be pre-filled. Here is what to expect:

What Axuall typically pre-populates:
- State licenses (status, expiration date, board certifications, DEA when applicable)
- BLS/ACLS/PALS certifications (when tied to credentialing boards)
- Name, date of birth, NPI, and basic demographics (after identity verification)

What must be entered manually:
- Personal contact info (phone, email, home address)
- Attestation questions (disciplinary history, malpractice, convictions)
- Any narrative/explanation fields ("explain this gap", "explain this claim")
- Employment history dates and roles (Axuall may suggest these but they require confirmation)

If a field you expect to be filled is blank, it likely falls into the manual entry category. Please complete those fields directly in the application.

Please don't hesitate to reach out if you have any questions!

[Your Name]`
  }
});
ISSUE_CASUAL[18]  = "wondering why their Axuall application fields aren't pre-filled";
ISSUE_DETAIL[18]  = "Axuall pre-populates license and certification data from verified databases, but personal, attestation, and narrative fields must be manually entered.";
ISSUE_ACTION[18]  = "explained what Axuall pre-populates vs. what requires manual entry";

// ── ISSUE #19: REQUEST SCREENSHOTS / UNCLEAR ISSUE ────────────────────────
ISSUES.push({
  id: 19, category: "portal", icon: "📸",
  title: "Request Screenshots to Troubleshoot",
  description: "Issue is unclear — ask the provider to share screenshots to help diagnose the problem.",
  keywords: [
    "not working", "having trouble", "having issues", "problem", "issue",
    "something wrong", "not sure", "dont know", "unclear", "cant figure out",
    "help me", "need help", "screenshot", "error message", "what do i say",
    "general issue", "vague issue", "unsure what issue", "unknown error"
  ],
  email: {
    subject: "Re: Technical Assistance",
    body: `Hi [Provider Name],

I hope you're having a great day! We are so sorry to hear you are having trouble. If you don't mind sharing any screenshots or pictures of the issue you are seeing, that would best help us troubleshoot the problem.

In the meantime, if you need immediate assistance, you can reach us at:
- Phone: 877-732-7080 (Monday through Friday, 8:30 AM to 5:30 PM EST)
- Or reply with a day and time that works best for you and we will be happy to reach out!

If you have any questions, feel free to reach out, we are happy to help!

[Your Name]`
  }
});
ISSUE_CASUAL[19]  = "a technical issue that needs more information to diagnose";
ISSUE_DETAIL[19]  = "The issue was unclear — screenshots were requested to help identify the problem.";
ISSUE_ACTION[19]  = "requested screenshots and offered a callback to troubleshoot";

// ── ISSUE #20: TIMESHEET FORWARDING / ADD APPROVER ────────────────────────
ISSUES.push({
  id: 20, category: "kimedics", icon: "📋",
  title: "Timesheet Forwarding / Add Approver or Recipient",
  description: "External contact (facility, client rep, or staffing contact) requests to receive or approve timesheets for a specific provider. TechOps adds the person in SF and sends them a Kimedics invite.",
  keywords: [
    "forward timesheets", "forward timesheet", "timesheet to me", "send timesheets",
    "timesheet recipient", "receive timesheets", "add me to timesheets",
    "timesheet approver", "add approver", "change approver", "new approver",
    "kimedics access", "kimedics invite", "add to kimedics", "timesheet forwarding",
    "forward all timesheets", "please forward"
  ],
  email: {
    subject: "Re: Timesheet Forwarding Request",
    body: `Hi [Name],

I hope you're having a great day!

I've sent an invitation email to [Provider Name]'s timesheet recipient. If you do not see it in your inbox, please check your Spam/Junk folder. The message will come from portal@kimedics.com. It may also help to ensure that emails from Kimedics aren't being blocked by your IT team.

In the meantime, here's a direct link you can use to create your account if the email doesn't come through:

[Kimedics invite link]

I hope this helps! Let me know if you need anything further.

Best,
[Your Name]`
  }
});
ISSUE_CASUAL[20]  = "a request to be added as a timesheet recipient or approver in Kimedics";
ISSUE_DETAIL[20]  = "An external contact requested to receive or approve timesheets for a provider. TechOps adds the person in SF and sends a Kimedics invite.";
ISSUE_ACTION[20]  = "submitted a request to add them as the timesheet recipient in SF and sent a Kimedics invite";

// ── ISSUE #21: AXUALL TO SF SYNC — PREVENTION & BEST PRACTICES ───────────
ISSUES.push({
  id: 21, category: "cred", icon: "🔄",
  title: "Axuall to Salesforce Sync — Prevention & Best Practices",
  description: "What causes the Axuall-to-SF sync to fail, and how to prevent or troubleshoot it.",
  keywords: [
    "prevent sync", "avoid sync", "sync best practices", "how to prevent sync issue",
    "why is sync failing", "why does sync fail", "what causes sync to fail",
    "sync prevention", "sync troubleshooting", "sync issues", "sync problems",
    "how to avoid sync", "stop sync from failing", "sync not working why",
    "axuall sync issue", "axuall to salesforce", "documents not syncing",
    "what can cause sync", "sync root cause", "duplicate account sync",
    "ssn mismatch", "last name mismatch sync", "npi wrong account"
  ],
  email: {
    subject: "Axuall to Salesforce Sync — Best Practices",
    body: `Hi [Name],

When we receive notice of a sync issue, the dev team manually forces the document sync since it was unable to update automatically in Salesforce. They are aware of the issue and working toward a full fix, but in the meantime here are a few things that can cause or prevent sync failures:

Check for duplicate accounts
If a duplicate exists, please reach out to LT Helpdesk to have it merged, as duplicates can interfere with the sync. An NPI number on the incorrect (duplicate) account will disrupt the sync flow. Removing it from the wrong account will help.

Verify SSN matches
Make sure the SSN in Axuall matches what is in Salesforce. If they differ, find the correct one and replace it.

Check for last name mismatches
If the last name differs between Axuall and Salesforce, it can also cause sync issues.

Please let me know if you have any questions!

Best,
[Your Name]`
  }
});
ISSUE_CASUAL[21]  = "a sync issue between Axuall and Salesforce";
ISSUE_DETAIL[21]  = "Documents or credentialing data failed to sync from Axuall to Salesforce. The dev team force-syncs manually. Common causes: duplicate accounts, NPI on wrong account, SSN mismatch, last name mismatch.";
ISSUE_ACTION[21]  = "shared sync prevention best practices";

// ── UTILITIES ─────────────────────────────────────────────────────────────
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function copyToClipboard(text, btn, defaultLabel) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ Copied!';
    btn.style.color = 'var(--success)';
    setTimeout(() => { btn.innerHTML = orig; btn.style.color = ''; }, 1500);
  });
}

// ── NLP: DETECT ISSUES ────────────────────────────────────────────────────
function normalizeQuery(text) {
  return text
    .toLowerCase()
    .replace(/can't/g,'cannot').replace(/won't/g,'will not').replace(/don't/g,'do not')
    .replace(/doesn't/g,'does not').replace(/isn't/g,'is not').replace(/aren't/g,'are not')
    .replace(/didn't/g,'did not').replace(/haven't/g,'have not').replace(/hasn't/g,'has not')
    .replace(/i'm/g,'i am').replace(/it's/g,'it is').replace(/they're/g,'they are')
    .replace(/[^\w\s]/g,' ').replace(/\s+/g,' ').trim();
}

function scoreIssue(normalizedText, issue) {
  let score = 0;
  const kws = issue.keywords || [];
  for (const kw of kws) {
    const wordCount = kw.trim().split(/\s+/).length;
    if (normalizedText.includes(kw)) {
      score += wordCount >= 3 ? 4 : wordCount === 2 ? 3 : 1;
    }
  }
  // Bonus for title words
  const titleWords = issue.title.toLowerCase().replace(/[^\w\s]/g,' ').split(/\s+/);
  for (const w of titleWords) {
    if (w.length > 3 && normalizedText.includes(w)) score += 1;
  }
  return score;
}

function detectIssues(text) {
  const normalized = normalizeQuery(text);
  const scored = ISSUES.map(issue => ({ issue, score: scoreIssue(normalized, issue) }))
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored;
}

// ── EMAIL CONTEXT PARSER ──────────────────────────────────────────────────
// Extracts names, roles, booking numbers, error messages, etc. from raw email text.
// Returns { senderName, senderEmail, senderIsInternal, providerName, bookingNum,
//           caseNum, errorMessage, emailAddresses, details[] }
function parseEmailContext(text) {
  const ctx = {
    senderName: null, senderEmail: null, senderIsInternal: false,
    providerName: null, bookingNum: null, caseNum: null,
    errorMessage: null, emailAddresses: [], details: []
  };

  // From: line — "From: Jane Smith <jane@company.com>" or "From: jane@company.com"
  const fromLine = text.match(/From:\s*([^\n<]+?)?\s*<?([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})>?/i);
  if (fromLine) {
    const rawName = fromLine[1] ? fromLine[1].trim().replace(/['"]/g,'') : null;
    ctx.senderEmail = fromLine[2].trim();
    ctx.senderIsInternal = ctx.senderEmail.toLowerCase().includes('@locumtenens.com');
    if (rawName) {
      // Strip "Dr." prefix for first-name use, keep full name
      ctx.senderName = rawName.replace(/^Dr\.?\s+/i,'').split(/\s+/).slice(0,2).join(' ');
    }
  }

  // All emails in the text
  const allEmails = text.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g) || [];
  ctx.emailAddresses = [...new Set(allEmails)];

  // Detect if any sender is internal (locumtenens.com domain)
  const hasInternal = ctx.emailAddresses.some(e => e.toLowerCase().includes('@locumtenens.com'));
  const hasExternal = ctx.emailAddresses.some(e => !e.toLowerCase().includes('@locumtenens.com'));

  // Provider name: "Dr. FirstName LastName" pattern
  const drMatch = text.match(/\bDr\.?\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
  if (drMatch) ctx.providerName = 'Dr. ' + drMatch[1];

  // If no Dr., look for a name after "for" or "to" near a proper noun
  if (!ctx.providerName) {
    const forMatch = text.match(/\bfor\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\b/);
    if (forMatch && forMatch[1] !== 'Your' && forMatch[1] !== 'Me') {
      ctx.providerName = forMatch[1];
    }
  }

  // Booking number: BKG-XXXXXXX or BKG XXXXXXX
  const bkgMatch = text.match(/\bBKG[-\s]?(\d{6,}|\w{6,})\b/i);
  if (bkgMatch) {
    ctx.bookingNum = 'BKG-' + bkgMatch[1];
    ctx.details.push({ label: 'Booking #', value: ctx.bookingNum });
  }

  // Case number: CS-XXXXXXX
  const csMatch = text.match(/\bCASE[-\s]?(\d{5,})\b/i);
  if (csMatch) {
    ctx.caseNum = 'CASE-' + csMatch[1];
    ctx.details.push({ label: 'Case #', value: ctx.caseNum });
  }

  // Error message in quotes or after "says" / "message" / "error"
  const errMatch = text.match(/(?:says?|message|error|reads?)[:\s"']+["']?([^"'\n]{10,60})["']?/i);
  if (errMatch) {
    ctx.errorMessage = '"' + errMatch[1].trim() + '"';
    ctx.details.push({ label: 'Error seen', value: ctx.errorMessage });
  }

  // Oh no message
  if (/oh no.*broken/i.test(text)) {
    ctx.errorMessage = '"Oh no, something is definitely broken."';
    ctx.details.push({ label: 'Error seen', value: ctx.errorMessage });
  }

  // Browser/device hints
  const browserMatch = text.match(/\b(Chrome|Firefox|Safari|Edge|Internet Explorer|IE)\b/i);
  if (browserMatch) ctx.details.push({ label: 'Browser', value: browserMatch[1] });

  const deviceMatch = text.match(/\b(iPhone|iPad|Android|Windows|Mac|MacBook|laptop|desktop|mobile)\b/i);
  if (deviceMatch) ctx.details.push({ label: 'Device', value: deviceMatch[1] });

  // VPN mention
  if (/\bVPN\b/i.test(text)) ctx.details.push({ label: 'Note', value: 'Connected to VPN' });

  // Urgency signals
  if (/\b(urgent|ASAP|right away|today|deadline|starts|contract|assignment)\b/i.test(text)) {
    ctx.details.push({ label: '⚡ Urgency', value: 'Provider flagged as urgent' });
  }

  // Sender role determination for closing summary
  // If sender is internal (@locumtenens.com), they're the recruiter/internal contact
  // and providerName is who they're writing about
  ctx.senderIsInternal = hasInternal && ctx.senderEmail && ctx.senderEmail.toLowerCase().includes('@locumtenens.com');

  // Detect if WE sent last and haven't heard back (follow-up needed)
  // Scan all From: lines — if there are multiple and the last one is @locumtenens.com, no reply yet
  const allFromMatches = [...text.matchAll(/^From:\s*[^\n<]*?<?([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})>?/gim)];
  if (allFromMatches.length > 1) {
    const lastFromEmail = allFromMatches[allFromMatches.length - 1][1].toLowerCase();
    ctx.noResponseDetected = lastFromEmail.includes('@locumtenens.com');
  } else {
    ctx.noResponseDetected = false;
  }

  return ctx;
}

// ── STYLE PROFILES ────────────────────────────────────────────────────────
const DEFAULT_STYLE_PROFILES = {
  Kayla:     { resolved: "she is gtg!", sent: "sent over everything they needed.", awaiting: "waiting on their response.", escalated: "looped in LT Helpdesk — they're handling it from here.", instructions: "When a case is escalated to or looped in with LT Helpdesk, it is complete and handed off — do not use waiting language. They handle it from there." },
  Becky:     { resolved: "looks like they're all set!", sent: "sent them what they needed.", awaiting: "waiting to hear back from them.", escalated: "sent this one up to the helpdesk.", instructions: "" },
  Noah:      { resolved: "they should be good to go.", sent: "sent the instructions over.", awaiting: "still waiting on a reply.", escalated: "escalated to TechOps helpdesk.", instructions: "" },
  Alejandro: { resolved: "issue is resolved.", sent: "instructions were sent.", awaiting: "awaiting provider response.", escalated: "escalated for further review.", instructions: "" }
};

function getStyleProfile(name) {
  const saved = {};
  const base = DEFAULT_STYLE_PROFILES[name] || DEFAULT_STYLE_PROFILES['Kayla'];
  ['resolved','sent','awaiting','escalated','instructions'].forEach(k => {
    const stored = localStorage.getItem(`closing_style_${name}_${k}`);
    saved[k] = stored !== null ? stored : base[k];
  });
  return saved;
}

function saveStyleProfile() {
  const who = document.getElementById('closing-who').value;
  ['resolved','sent','awaiting','escalated','instructions'].forEach(k => {
    const el = document.getElementById(`sp-${k}`);
    if (el) localStorage.setItem(`closing_style_${who}_${k}`, el.value);
  });
  toggleStyleEditor();
}

function loadStyleProfileUI(name) {
  const profile = getStyleProfile(name);
  ['resolved','sent','awaiting','escalated','instructions'].forEach(k => {
    const el = document.getElementById(`sp-${k}`);
    if (el) el.value = profile[k] || '';
  });
}

function onClosingWhoChange() {
  const who = document.getElementById('closing-who').value;
  loadStyleProfileUI(who);
}

function toggleTeamKB() {
  const form = document.getElementById('team-kb-form');
  const open = form.style.display === 'none';
  form.style.display = open ? 'block' : 'none';
  if (open) {
    const ta = document.getElementById('team-kb-input');
    if (ta) ta.value = localStorage.getItem('techops_team_kb') || '';
    updateTeamKBStatus();
  }
}

function saveTeamKB() {
  const val = document.getElementById('team-kb-input').value.trim();
  if (val) {
    localStorage.setItem('techops_team_kb', val);
  } else {
    localStorage.removeItem('techops_team_kb');
  }
  updateTeamKBStatus();
  toggleTeamKB();
}

function updateTeamKBStatus() {
  const el = document.getElementById('team-kb-status');
  if (!el) return;
  const saved = localStorage.getItem('techops_team_kb');
  el.textContent = saved ? `${saved.length.toLocaleString()} characters saved` : 'Not set';
  el.style.color = saved ? 'var(--teal)' : 'var(--muted)';
}

function toggleStyleEditor() {
  const ed = document.getElementById('style-editor');
  const open = ed.style.display === 'none';
  ed.style.display = open ? 'block' : 'none';
  if (open) {
    const who = document.getElementById('closing-who');
    if (who && currentUser) {
      const opt = Array.from(who.options).find(o => o.value === currentUser.name);
      if (opt) who.value = currentUser.name;
    }
    loadStyleProfileUI(who ? who.value : 'Kayla');
  }
}

// ── ANALYZE TAB LOGIC ─────────────────────────────────────────────────────
function updateCharCount() {
  const len = (document.getElementById('email-input').value || '').length;
  document.getElementById('char-count').textContent = len.toLocaleString() + ' character' + (len !== 1 ? 's' : '');
}

function insertPhrase(phrase) {
  const ta = document.getElementById('email-input');
  const start = ta.selectionStart;
  const end   = ta.selectionEnd;
  const val   = ta.value;
  ta.value = val.slice(0, start) + phrase + val.slice(end);
  ta.selectionStart = ta.selectionEnd = start + phrase.length;
  ta.focus();
  updateCharCount();
}

function clearAll() {
  document.getElementById('email-input').value = '';
  document.getElementById('output-section').style.display = 'none';
  document.getElementById('inline-error').style.display = 'none';
  updateCharCount();
}

function copyResponse() {
  const btn = document.getElementById('copy-btn');
  const text = document.getElementById('draft-output').value;
  copyToClipboard(text, btn, 'Copy Response');
}

function generateResponse() {
  const input = document.getElementById('email-input').value.trim();
  const errEl = document.getElementById('inline-error');
  if (!input) {
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';

  const matches = detectIssues(input);
  const topMatch = matches.length > 0 ? matches[0] : null;
  const issue = topMatch && topMatch.score >= 2 ? topMatch.issue : null;

  // Parse email context for names, booking numbers, device info, etc.
  const ctx = parseEmailContext(input);

  // Day-aware opener
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const dayOpener = day === 'Friday' ? 'Happy Friday.' :
    day === 'Monday' ? 'Hope you had a great weekend.' :
    `Good ${new Date().getHours() < 12 ? 'morning' : 'afternoon'}.`;

  // Determine reply-to name: if internal sent it, reply to them; otherwise reply to provider
  const replyToName = ctx.senderIsInternal
    ? (ctx.senderName ? ctx.senderName.split(' ')[0] : null)
    : (ctx.providerName ? ctx.providerName.replace(/^Dr\.?\s+/i,'').split(' ')[0] : ctx.senderName);

  // Show/hide no-match banner and follow-up banner
  document.getElementById('no-match-banner').style.display = (!issue && !ctx.noResponseDetected) ? 'block' : 'none';
  document.getElementById('followup-banner').style.display = ctx.noResponseDetected ? 'flex' : 'none';

  // Update drafted response card title based on mode
  const draftCardTitle = document.querySelector('#output-section .card-title');
  const draftCardSubtitle = document.querySelector('#output-section .card-subtitle');
  if (draftCardTitle) draftCardTitle.textContent = ctx.noResponseDetected ? 'Follow-Up Email' : 'Drafted Response';
  if (draftCardSubtitle) draftCardSubtitle.textContent = ctx.noResponseDetected ? 'No reply yet. Send this check-in.' : 'Edit before sending';

  // Follow-up mode: last message was from us, no reply yet
  let draft, subjectText;
  if (ctx.noResponseDetected) {
    const firstName = replyToName || 'there';
    const issueRef = issue ? issue.title.toLowerCase() : 'your recent issue';
    subjectText = 'RE: Following Up';
    draft = `${dayOpener}\n\nHi ${firstName},\n\nI just wanted to follow up on my previous message regarding ${issueRef}. Were you able to give it a try? Please let me know if you are still running into any trouble or have any questions, we are happy to help!\n\nBest,\nTechOps Support`;
  } else {
    const emailData = issue ? issue.email : GENERIC_EMAIL;
    subjectText = emailData.subject;
    draft = emailData.body
      .replace(/\[Provider Name\]/g, replyToName || '[Provider Name]')
      .replace(/\[Name\]/g, replyToName || '[Name]')
      .replace('[DAY_OPENER]', dayOpener)
      .replace('Happy [Day]!', dayOpener)
      .replace('[Day]', day);
  }

  document.getElementById('subject-text').textContent = subjectText;
  document.getElementById('draft-output').value = draft;

  // Related matches chips
  const alsoEl  = document.getElementById('also-related');
  const chipsEl = document.getElementById('related-chips');
  const secondary = matches.slice(1, 4).filter(m => m.score >= 2);
  if (secondary.length > 0) {
    chipsEl.innerHTML = secondary.map(m =>
      `<span class="related-chip" onclick="swapToIssue(${m.issue.id})">${m.issue.icon} ${m.issue.title}</span>`
    ).join('');
    alsoEl.style.display = 'block';
  } else {
    alsoEl.style.display = 'none';
  }

  // Quick reference panel — issue match + extracted context
  const summaryBody = document.getElementById('summary-body');
  let summaryHtml = '';

  if (issue) {
    const confScore = topMatch.score >= 6 ? 'High' : topMatch.score >= 4 ? 'Medium' : 'Possible';
    const confColor = confScore === 'High' ? 'var(--success)' : confScore === 'Medium' ? 'var(--brand)' : 'var(--warn)';
    summaryHtml += `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span style="font-size:22px;">${issue.icon}</span>
        <div>
          <div style="font-weight:700;font-size:14px;">${issue.title}</div>
          <div style="font-size:11px;color:${confColor};font-weight:600;">${confScore} confidence (score: ${topMatch.score})</div>
        </div>
      </div>
      <div class="summary-label">Description</div>
      <div class="summary-value" style="margin-bottom:12px;">${issue.description || ''}</div>
    `;
  } else {
    summaryHtml += `<div style="color:var(--muted);font-size:13px;margin-bottom:12px;">No matching issue detected — using generic response.</div>`;
  }

  // Extracted context details
  const ctxRows = [];
  if (ctx.senderName)   ctxRows.push({ label: ctx.senderIsInternal ? 'Internal contact' : 'Provider', value: ctx.senderName + (ctx.senderEmail ? ` &lt;${ctx.senderEmail}&gt;` : '') });
  if (ctx.providerName && ctx.senderIsInternal) ctxRows.push({ label: 'Provider', value: ctx.providerName });
  ctxRows.push(...ctx.details);

  if (ctxRows.length > 0) {
    summaryHtml += `<div class="summary-label" style="margin-bottom:6px;">Detected from email</div>`;
    summaryHtml += ctxRows.map(r =>
      `<div style="display:flex;gap:6px;margin-bottom:4px;font-size:12px;"><span style="color:var(--muted);min-width:110px;flex-shrink:0;">${r.label}</span><span style="color:var(--text);font-weight:500;">${r.value}</span></div>`
    ).join('');
  }

  // Escalation check
  const lower = input.toLowerCase();
  if (ESCALATION_TRIGGERS.some(t => lower.includes(t))) {
    summaryHtml += `<div style="margin-top:10px;padding:10px 12px;background:var(--warn-bg);border:1px solid var(--warn-border);border-radius:var(--radius-sm);font-size:12px;color:var(--warn);font-weight:600;">⚠️ Escalation keyword detected — consider routing to TechOps Helpdesk.</div>`;
  }

  summaryBody.innerHTML = summaryHtml;

  // Auto-fill closing summary fields from parsed context
  // If sender is internal: they're the "internal contact", provider is who they wrote about
  // If sender is provider: they're the "provider", no internal contact to fill
  if (ctx.senderIsInternal) {
    if (ctx.senderName) document.getElementById('closing-internal').value = ctx.senderName;
    if (ctx.providerName) document.getElementById('closing-provider').value = ctx.providerName;
  } else {
    if (ctx.providerName || ctx.senderName) {
      document.getElementById('closing-provider').value = ctx.providerName || ctx.senderName;
    }
    document.getElementById('closing-internal').value = '';
  }

  document.getElementById('output-section').style.display = 'block';
  document.getElementById('output-section').scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Auto-generate closing summary from full thread context
  generateClosingSummary();
}

// Swap template when user clicks a secondary-match chip
function swapToIssue(id) {
  const issue = ISSUES.find(i => i.id === id);
  if (!issue) return;
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const dayOpener = day === 'Friday' ? 'Happy Friday.' :
    day === 'Monday' ? 'Hope you had a great weekend.' :
    `Good ${new Date().getHours() < 12 ? 'morning' : 'afternoon'}.`;
  const currentDraft = document.getElementById('draft-output').value;
  const nameMatch = currentDraft.match(/^Hi (.+?)[\n,!]/);
  const senderName = nameMatch ? nameMatch[1] : null;
  let draft = issue.email.body
    .replace(/\[Provider Name\]/g, senderName || '[Provider Name]')
    .replace(/\[Name\]/g, senderName || '[Name]')
    .replace('[DAY_OPENER]', dayOpener)
    .replace('[Day]', day);
  document.getElementById('subject-text').textContent = issue.email.subject;
  document.getElementById('draft-output').value = draft;
  document.getElementById('no-match-banner').style.display = 'none';
}

// ── CLOSING SUMMARY (ANALYZE TAB) ─────────────────────────────────────────
// Stored context so outcome pill changes can re-render without re-parsing
let _closingCtx = null;
let _closingOutcome = 'sent';

function setOutcome(outcome) {
  _closingOutcome = outcome;
  document.querySelectorAll('.outcome-pill').forEach(p =>
    p.classList.toggle('active', p.dataset.outcome === outcome));
  if (_closingCtx) renderClosingOutput();
}

function generateClosingSummary() {
  const fullText = document.getElementById('email-input').value;
  if (!fullText.trim()) return;

  const who = currentUser ? currentUser.name : 'Kayla';
  const ctx = parseEmailContext(fullText);
  const matches = detectIssues(fullText);
  const topMatch = matches.length > 0 && matches[0].score >= 2 ? matches[0] : null;
  const issueId  = topMatch ? topMatch.issue.id : null;

  // Thread arc: scan full pasted text for resolution signals
  const lower = fullText.toLowerCase();
  const resolved = /\b(it worked|i can see it|i'm in|i'm all set|got it|thank you so much|that did it|that fixed it|all good|great thank you|works now|i see it now|thank you kayla|thank you becky|thank you noah|thank you alejandro)\b/i.test(fullText);
  const providerTriedSomething = /\b(i tried|i went back|i clicked|i attempted|i followed|i did what)\b/i.test(fullText);

  // Rough message count — split by "From:" headers or common email dividers
  const msgCount = (fullText.match(/^From:/gim) || []).length || 1;

  // Auto-detect outcome from thread if not manually set
  if (resolved && _closingOutcome === 'sent') {
    _closingOutcome = 'resolved';
    document.querySelectorAll('.outcome-pill').forEach(p =>
      p.classList.toggle('active', p.dataset.outcome === 'resolved'));
  }

  _closingCtx = { who, ctx, issueId, msgCount, providerTriedSomething, resolved };
  renderClosingOutput();
}

function renderClosingOutput() {
  const { who, ctx, issueId, msgCount, providerTriedSomething } = _closingCtx;
  const profile = getStyleProfile(who);

  const issueDesc   = issueId ? ISSUE_CASUAL[issueId]  : 'a technical issue';
  const issueDetail = issueId ? ISSUE_DETAIL[issueId]  : null;
  const issueAction = issueId ? ISSUE_ACTION[issueId]  : 'reviewed the issue and sent over next steps';

  const provider = ctx.providerName || ctx.senderName || 'the provider';
  const internal = ctx.senderIsInternal ? ctx.senderName : null;

  let summary = '';

  // Sentence 1: who reached out and why
  if (internal) {
    summary += `${internal} reached out because ${provider} was having trouble with ${issueDesc}.`;
  } else {
    summary += `${provider} reached out because they were having trouble with ${issueDesc}.`;
  }

  // Sentence 2: specific detail about what was happening
  if (issueDetail) summary += ` ${issueDetail}`;

  // Sentence 3: thread context — if there was back and forth, note it briefly
  if (msgCount > 2 && providerTriedSomething) {
    summary += ` There was a little back and forth while they worked through it.`;
  }

  // Sentence 4: what I did
  summary += ` I ${issueAction}.`;

  // Sentence 5: outcome phrase from user's style profile
  summary += ` ${capitalize(profile[_closingOutcome])}`;

  document.getElementById('closing-output').value = summary;
}

function copyClosing() {
  const btn  = document.getElementById('copy-closing-btn');
  const text = document.getElementById('closing-output').value;
  copyToClipboard(text, btn, 'Copy to Clipboard');
}

// ── SIMPLIFY TAB ──────────────────────────────────────────────────────────
function simplifyEmail() {
  const input = document.getElementById('simplify-input').value.trim();
  if (!input) return;

  const words    = input.split(/\s+/).length;
  const sentences= input.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const avgWords = sentences > 0 ? Math.round(words / sentences) : words;

  // Flag complex phrases
  const COMPLEX = [
    ['per our conversation', 'as we discussed'],
    ['in regards to', 'about'],
    ['at this point in time', 'now'],
    ['in the event that', 'if'],
    ['due to the fact that', 'because'],
    ['it is important to note that', ''],
    ['please be advised that', ''],
    ['please note that', ''],
    ['as per', 'per'],
    ['utilize', 'use'],
    ['endeavor', 'try'],
    ['assist', 'help'],
    ['commence', 'start'],
    ['prior to', 'before'],
    ['subsequent to', 'after'],
    ['in order to', 'to'],
    ['is able to', 'can'],
    ['are able to', 'can'],
  ];

  let simplified = input;
  const flags = [];
  for (const [phrase, replacement] of COMPLEX) {
    const re = new RegExp(phrase, 'gi');
    if (re.test(simplified)) {
      flags.push({ found: phrase, suggest: replacement });
      simplified = simplified.replace(new RegExp(phrase, 'gi'), replacement || '');
    }
  }

  // Clean up double spaces
  simplified = simplified.replace(/  +/g, ' ').replace(/ \./g, '.').trim();

  const newWords = simplified.split(/\s+/).length;
  const pctSaved = words > 0 ? Math.round(((words - newWords) / words) * 100) : 0;

  // Stats
  document.getElementById('simplify-stats').innerHTML = `
    <div class="simplify-stat"><div class="stat-num">${words}</div><div style="font-size:11px;color:var(--muted);">Original words</div></div>
    <div class="simplify-stat"><div class="stat-num">${sentences}</div><div style="font-size:11px;color:var(--muted);">Sentences</div></div>
    <div class="simplify-stat"><div class="stat-num">${avgWords}</div><div style="font-size:11px;color:var(--muted);">Avg words/sentence</div></div>
    <div class="simplify-stat"><div class="stat-num" style="color:var(--success);">${pctSaved}%</div><div style="font-size:11px;color:var(--muted);">Words saved</div></div>
  `;

  document.getElementById('simplify-flags').innerHTML = flags.length > 0
    ? `<div style="margin-top:12px;"><div class="summary-label" style="margin-bottom:6px;">Phrases simplified</div>${flags.map(f => `<div style="font-size:12px;margin-bottom:4px;color:var(--text);">❌ <em>"${f.found}"</em>${f.suggest ? ` → <strong>"${f.suggest}"</strong>` : ' (removed)'}</div>`).join('')}</div>`
    : '<div style="font-size:13px;color:var(--success);margin-top:12px;">✅ No complex phrases detected — looks good!</div>';

  document.getElementById('simplify-improvement').textContent =
    pctSaved > 0 ? `${pctSaved}% shorter after simplification` : 'No changes needed';

  document.getElementById('simplified-output').value = simplified;
  document.getElementById('simplify-output').style.display = 'block';
}

function clearSimplify() {
  document.getElementById('simplify-input').value = '';
  document.getElementById('simplify-output').style.display = 'none';
}

function copySimplified() {
  const btn  = document.getElementById('copy-simplified-btn');
  const text = document.getElementById('simplified-output').value;
  copyToClipboard(text, btn, 'Copy');
}

// ── KB CUSTOM ISSUES (localStorage) ──────────────────────────────────────
function loadCustomIssues() {
  try {
    const saved = JSON.parse(localStorage.getItem('kb_custom_issues') || '[]');
    saved.forEach(ci => {
      if (!ISSUES.find(i => i.id === ci.id)) {
        ISSUES.push(ci);
        if (ci.closing_action) ISSUE_ACTION[ci.id] = ci.closing_action;
      }
    });
    if (saved.length > 0) {
      document.getElementById('kb-custom-pill').style.display = 'flex';
      document.getElementById('kb-custom-filter').style.display = 'inline-flex';
    }
  } catch(e) {}
}

function saveCustomIssue() {
  const title    = document.getElementById('ni-title').value.trim();
  const keywords = document.getElementById('ni-keywords').value.trim();
  const body     = document.getElementById('ni-body').value.trim();
  const errEl    = document.getElementById('add-issue-error');

  if (!title || !keywords || !body) {
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';

  const newId = 1000 + Date.now() % 100000;
  const issue = {
    id: newId,
    category: document.getElementById('ni-category').value,
    icon: '⭐',
    title,
    description: document.getElementById('ni-description').value.trim() || title,
    keywords: keywords.split(',').map(k => k.trim().toLowerCase()).filter(Boolean),
    closing_action: document.getElementById('ni-action').value.trim() || null,
    email: {
      subject: document.getElementById('ni-subject').value.trim() || `Re: ${title}`,
      body
    },
    custom: true
  };

  const saved = JSON.parse(localStorage.getItem('kb_custom_issues') || '[]');
  saved.push(issue);
  localStorage.setItem('kb_custom_issues', JSON.stringify(saved));

  ISSUES.push(issue);
  if (issue.closing_action) ISSUE_ACTION[newId] = issue.closing_action;

  document.getElementById('kb-custom-pill').style.display = 'flex';
  document.getElementById('kb-custom-filter').style.display = 'inline-flex';

  // Clear form
  ['ni-title','ni-keywords','ni-description','ni-steps','ni-subject','ni-action','ni-body'].forEach(id => {
    document.getElementById(id).value = '';
  });
  toggleAddIssueForm();
  renderKB('all');
  switchTab('kb');
}

function deleteCustomIssue(id) {
  const saved = JSON.parse(localStorage.getItem('kb_custom_issues') || '[]');
  const updated = saved.filter(i => i.id !== id);
  localStorage.setItem('kb_custom_issues', JSON.stringify(updated));
  const idx = ISSUES.findIndex(i => i.id === id);
  if (idx > -1) ISSUES.splice(idx, 1);
  if (updated.length === 0) {
    document.getElementById('kb-custom-pill').style.display = 'none';
    document.getElementById('kb-custom-filter').style.display = 'none';
  }
  renderKB(window._kbActiveFilter || 'all');
}

function toggleAddIssueForm() {
  const form = document.getElementById('add-issue-form');
  const btn  = document.getElementById('toggle-add-btn');
  const open = form.style.display === 'none';
  form.style.display = open ? 'block' : 'none';
  btn.textContent = open ? '✕ Cancel' : '+ Add Issue';
}

// ── KB RENDER ─────────────────────────────────────────────────────────────
let _kbActiveFilter = 'all';

function openKB(cat) {
  switchTab('kb');
  filterKB(cat || 'all');
}

function filterKB(cat) {
  _kbActiveFilter = cat;
  document.querySelectorAll('#kb-filter-bar .q-filter').forEach(b => {
    b.classList.toggle('active', b.dataset.kbcat === cat);
  });
  renderKB(cat);
}

const CAT_LABELS = {
  login:'Login & Account', docs:'Documents', email:'Email & Invites',
  cred:'Credentialing', axuall:'Axuall', mobile:'Mobile & Browser',
  portal:'Portal & Tabs', custom:'Custom'
};

function renderKB(cat) {
  const grid = document.getElementById('kb-grid');
  const filtered = cat === 'all'
    ? ISSUES
    : cat === 'custom'
    ? ISSUES.filter(i => i.custom)
    : ISSUES.filter(i => i.category === cat);

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><p>No issues in this category yet.</p></div>';
    return;
  }

  grid.innerHTML = filtered.map(issue => {
    const catLabel = CAT_LABELS[issue.category] || issue.category;
    const isCustom = issue.custom ? 'custom' : '';
    const deleteBtn = issue.custom
      ? `<button class="kb-delete-btn" onclick="event.stopPropagation();deleteCustomIssue(${issue.id})">✕ Delete</button>`
      : '';

    return `<div class="kb-issue-card" id="kb-card-${issue.id}">
      <div class="kb-issue-header" onclick="toggleKBCard(${issue.id})">
        <div class="kb-issue-left">
          <span class="kb-issue-icon">${issue.icon}</span>
          <div>
            <div class="kb-issue-title">${issue.title}</div>
            <div class="kb-issue-desc">${issue.description || ''}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="kb-cat-badge ${isCustom}">${catLabel}</span>
          ${deleteBtn}
          <svg class="kb-chevron" id="kb-chev-${issue.id}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
      <div class="kb-issue-body" id="kb-body-${issue.id}">
        ${ISSUE_DETAIL[issue.id] ? `<div style="padding:10px 14px 0;font-size:12px;color:var(--muted);line-height:1.6;border-bottom:1px solid var(--border);padding-bottom:10px;">${ISSUE_DETAIL[issue.id]}</div>` : ''}
        <div class="kb-section">
          ${issue.email ? `
          <div class="kb-section-label" style="display:flex;align-items:center;justify-content:space-between;">
            Email Response
            <div style="display:flex;align-items:center;gap:6px;">
              <span style="font-size:11px;color:var(--muted);">Subject: <em>${issue.email.subject}</em></span>
              <button class="btn btn-copy btn-sm" onclick="copyKBTemplate(${issue.id})">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                Copy
              </button>
            </div>
          </div>
          <div class="kb-template-wrap">
            <textarea class="kb-template-area" id="kb-tmpl-${issue.id}">${issue.email.body}</textarea>
          </div>` : issue.emailBranches ? `
          <div class="kb-section-label" style="margin-bottom:10px;">Conditional Reply</div>
          ${issue.branches.map(b => `<div style="margin-bottom:12px;">
            <div style="font-size:11px;font-weight:600;color:var(--info-text);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.04em;">${b.label}</div>
            <div style="font-size:11px;color:var(--muted);margin-bottom:4px;">Subject: <em>${issue.emailBranches[b.key].subject}</em></div>
            <div class="kb-template-wrap"><textarea class="kb-template-area" id="kb-tmpl-${issue.id}-${b.key}">${issue.emailBranches[b.key].body}</textarea></div>
          </div>`).join('')}` : ''}
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleKBCard(id) {
  const body = document.getElementById(`kb-body-${id}`);
  const chev = document.getElementById(`kb-chev-${id}`);
  const open = body.classList.toggle('open');
  chev.classList.toggle('open', open);
}

function copyKBTemplate(id) {
  const ta = document.getElementById(`kb-tmpl-${id}`);
  const btn = event.target.closest('button');
  if (!ta || !btn) return;
  copyToClipboard(ta.value, btn, 'Copy Template');
}

// ── AUTH ──────────────────────────────────────────────────────────────────
// Prototype only — hardcoded users, no real security.
// In production this would be replaced with Salesforce SSO or an identity provider.
const USERS = {
  becky:     { name: 'Becky',     role: 'TechOps Specialist', color: '#7c3aed', initials: 'B'  },
  kayla:     { name: 'Kayla',     role: 'TechOps Specialist', color: '#0891b2', initials: 'K'  },
  noah:      { name: 'Noah',      role: 'TechOps Specialist', color: '#059669', initials: 'N'  },
  alejandro: { name: 'Alejandro', role: 'TechOps Specialist', color: '#d97706', initials: 'AL' }
};
const SHARED_PASSWORD = 'techops123';

let currentUser = null;

function attemptLogin() {
  const username = document.getElementById('login-username').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;
  const errorEl  = document.getElementById('login-error');
  const userInput = document.getElementById('login-username');
  const passInput = document.getElementById('login-password');

  userInput.classList.remove('error');
  passInput.classList.remove('error');
  errorEl.classList.remove('show');

  if (!USERS[username] || password !== SHARED_PASSWORD) {
    errorEl.classList.add('show');
    userInput.classList.add('error');
    passInput.classList.add('error');
    passInput.value = '';
    passInput.focus();
    return;
  }

  // Success
  currentUser = { username, ...USERS[username] };
  sessionStorage.setItem('techops_user', JSON.stringify(currentUser));
  applySession(currentUser);
}

function applySession(user) {
  // Hide login overlay
  document.getElementById('login-overlay').classList.add('hidden');

  // Update header
  const avatar = document.getElementById('header-avatar');
  avatar.textContent = user.initials;
  avatar.style.background = user.color;
  document.getElementById('header-name').textContent = user.name;
  document.getElementById('header-role').textContent = user.role;

  // Pre-select "Who's closing?" to match logged-in user
  const closingWho = document.getElementById('closing-who');
  if (closingWho) {
    const opt = Array.from(closingWho.options).find(o => o.value === user.name);
    if (opt) closingWho.value = user.name;
  }
}

function fillLogin(username, password) {
  document.getElementById('login-username').value = username;
  document.getElementById('login-password').value = password;
  document.getElementById('login-username').classList.remove('error');
  document.getElementById('login-password').classList.remove('error');
  document.getElementById('login-error').classList.remove('show');
  document.getElementById('login-password').focus();
}

function logout() {
  sessionStorage.removeItem('techops_user');
  currentUser = null;
  document.getElementById('login-username').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('login-error').classList.remove('show');
  document.getElementById('login-overlay').classList.remove('hidden');
}

// ── ASSISTANT CHAT ────────────────────────────────────────────────────────
let chatOpen = false;
let chatCaseId = null;

function dockChatPanel() {
  const queueLayout = document.querySelector('#tab-queue .queue-layout');
  if (queueLayout) queueLayout.classList.add('list-hidden');
  document.getElementById('chat-fab').style.display = 'none';
}

function undockChatPanel() {
  const queueLayout = document.querySelector('#tab-queue .queue-layout');
  if (queueLayout) queueLayout.classList.remove('list-hidden');
}

function restoreQueueList() {
  chatOpen = false;
  document.getElementById('chat-panel').classList.remove('open');
  undockChatPanel();
  const overlay = document.getElementById('chat-overlay');
  if (overlay) overlay.style.display = 'none';
  document.getElementById('chat-fab').style.display = '';
}

function toggleChat() {
  chatOpen = !chatOpen;
  const chatPanel = document.getElementById('chat-panel');
  const overlay = document.getElementById('chat-overlay');
  const onQueue = document.getElementById('tab-queue')?.classList.contains('active');
  if (chatOpen) {
    chatPanel.classList.add('open');
    if (onQueue) dockChatPanel();
    else if (overlay) overlay.style.display = 'block';
  } else {
    chatPanel.classList.remove('open');
    undockChatPanel();
    if (overlay) overlay.style.display = 'none';
    document.getElementById('chat-fab').style.display = '';
  }
}

let sidebarCollapsed = false;
function toggleSidebar() {
  sidebarCollapsed = !sidebarCollapsed;
  document.querySelector('.layout').classList.toggle('sidebar-collapsed', sidebarCollapsed);
  const btn = document.getElementById('sidebar-toggle-btn');
  btn.textContent = sidebarCollapsed ? '▶' : '◀';
  btn.title = sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar';
}

// ── OUTLOOK OAUTH (PROTOTYPE) ──────────────────────────────────────────────
let outlookConnected = false;

function initOutlookState() {
  const saved = localStorage.getItem('outlook_connected');
  if (saved) {
    const data = JSON.parse(saved);
    outlookConnected = true;
    setOutlookConnectedUI(data.email);
  }
}

function handleOutlookConnect() {
  if (outlookConnected) return;
  // Pre-fill email from logged-in user if available
  const headerName = document.getElementById('header-name')?.textContent || '';
  const guessedEmail = headerName ? headerName.toLowerCase().replace(' ', '.') + '@locumtenens.com' : '';
  document.getElementById('outlook-email-input').value = guessedEmail;
  document.getElementById('outlook-step-email').style.display = '';
  document.getElementById('outlook-step-password').style.display = 'none';
  document.getElementById('outlook-step-loading').style.display = 'none';
  document.getElementById('outlook-step-connected').style.display = 'none';
  document.getElementById('outlook-modal-overlay').classList.add('open');
  setTimeout(() => document.getElementById('outlook-email-input').focus(), 100);
}

function outlookNextStep() {
  const email = document.getElementById('outlook-email-input').value.trim();
  if (!email) return;
  document.getElementById('outlook-email-display').textContent = email;
  document.getElementById('outlook-step-email').style.display = 'none';
  document.getElementById('outlook-step-password').style.display = '';
  setTimeout(() => document.getElementById('outlook-password-input').focus(), 100);
}

function outlookGoBack() {
  document.getElementById('outlook-step-password').style.display = 'none';
  document.getElementById('outlook-step-email').style.display = '';
  setTimeout(() => document.getElementById('outlook-email-input').focus(), 100);
}

function outlookSignIn() {
  const email = document.getElementById('outlook-email-display').textContent;
  document.getElementById('outlook-step-password').style.display = 'none';
  document.getElementById('outlook-step-loading').style.display = '';
  // Simulate OAuth handshake delay
  setTimeout(() => {
    document.getElementById('outlook-step-loading').style.display = 'none';
    document.getElementById('outlook-step-connected').style.display = '';
    document.getElementById('outlook-connected-label').textContent = 'Connected as ' + email;
    // Save state
    localStorage.setItem('outlook_connected', JSON.stringify({ email }));
    outlookConnected = true;
    setOutlookConnectedUI(email);
  }, 1800);
}

function setOutlookConnectedUI(email) {
  const btn = document.getElementById('outlook-connect-btn');
  const label = document.getElementById('outlook-btn-label');
  btn.classList.add('connected');
  label.textContent = 'Outlook Connected';
  // Insert dot indicator
  if (!btn.querySelector('.btn-outlook-dot')) {
    const dot = document.createElement('span');
    dot.className = 'btn-outlook-dot';
    btn.insertBefore(dot, btn.firstChild);
  }
  btn.onclick = null; // disable click when connected
  // Show banner in My Queue
  const banner = document.getElementById('outlook-connected-banner');
  if (banner) banner.style.display = 'flex';
}

function disconnectOutlook() {
  localStorage.removeItem('outlook_connected');
  outlookConnected = false;
  const btn = document.getElementById('outlook-connect-btn');
  const label = document.getElementById('outlook-btn-label');
  btn.classList.remove('connected');
  label.textContent = 'Connect Outlook';
  const dot = btn.querySelector('.btn-outlook-dot');
  if (dot) dot.remove();
  btn.onclick = handleOutlookConnect;
  document.getElementById('outlook-connected-banner').style.display = 'none';
}

function closeOutlookModal() {
  document.getElementById('outlook-modal-overlay').classList.remove('open');
}

function closeOutlookModalOnBg(e) {
  if (e.target === document.getElementById('outlook-modal-overlay')) closeOutlookModal();
}

// Drag the FAB (and reposition panel relative to it)
(function initChatDrag() {
  document.addEventListener('DOMContentLoaded', () => {
    const fab   = document.getElementById('chat-fab');
    const panel = document.getElementById('chat-panel');
    if (!fab) return;
    let dragging = false, startX, startY, origX, origY;

    fab.addEventListener('mousedown', e => {
      dragging = false;
      startX = e.clientX; startY = e.clientY;
      origX = fab.getBoundingClientRect().left;
      origY = fab.getBoundingClientRect().top;

      const onMove = e => {
        const dx = e.clientX - startX, dy = e.clientY - startY;
        if (!dragging && Math.abs(dx) + Math.abs(dy) > 4) {
          dragging = true;
          fab.classList.add('dragging');
        }
        if (dragging) {
          const nx = Math.max(0, Math.min(window.innerWidth  - 56, origX + dx));
          const ny = Math.max(0, Math.min(window.innerHeight - 56, origY + dy));
          fab.style.left   = nx + 'px';
          fab.style.top    = ny + 'px';
          fab.style.right  = 'auto';
          fab.style.bottom = 'auto';
          // keep panel above fab
          panel.style.left   = Math.max(0, Math.min(window.innerWidth - 325, nx - 270)) + 'px';
          panel.style.bottom = 'auto';
          panel.style.right  = 'auto';
          panel.style.top    = Math.max(0, ny - 340) + 'px';
        }
      };
      const onUp = () => {
        fab.classList.remove('dragging');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (dragging) { dragging = false; }
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });

    // Don't open panel if we were dragging
    fab.addEventListener('click', e => { if (dragging) e.stopImmediatePropagation(); });
  });
})();

function setChatCase(caseId) {
  chatCaseId = caseId;
  const c = MOCK_QUEUE.find(q => q.id === caseId);
  if (!c) return;

  // Close panel so the case is visible
  chatOpen = false;
  document.getElementById('chat-panel').classList.remove('open');

  // Update header label (floating panel + assistant tab)
  const label = document.getElementById('chat-case-label');
  if (label) label.textContent = `${caseId} · ${c.provider}`;
  const asstLabel = document.getElementById('asst-case-label');
  if (asstLabel) asstLabel.textContent = `${caseId} · ${c.provider} — ${c.subject}`;

  // Update placeholder suggestions to reference the case
  const msgs = document.getElementById('chat-messages');
  msgs.innerHTML = `
    <div class="chat-placeholder">
      <div style="font-size:22px;margin-bottom:8px;">🔌</div>
      <div style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:4px;">Case loaded</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:12px;line-height:1.5;">
        <strong>${c.provider}</strong> · ${c.subject}
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div class="chat-suggestion">"What should I do if ${c.provider.split(' ')[0]} replies and it's still not working?"</div>
        <div class="chat-suggestion">"Rephrase my response shorter"</div>
        <div class="chat-suggestion">"Is this something I escalate or handle myself?"</div>
        <div class="chat-suggestion">"Write a follow-up for ${caseId}"</div>
      </div>
    </div>`;

  // Enable the input now that a case is loaded
  const chatInput = document.getElementById('chat-input');
  const chatSendBtn = document.querySelector('.chat-send-btn');
  if (chatInput) { chatInput.disabled = false; chatInput.placeholder = 'Ask about this case…'; }
  if (chatSendBtn) chatSendBtn.disabled = false;
}

// ── INIT ──────────────────────────────────────────────────────────────────
loadCustomIssues();
renderQueue('all');
renderKB('all');
loadStyleProfileUI('Kayla');
initOutlookState();
initApiState();
updateTeamKBStatus();
// Default tab is Assistant — hide the FAB on load, collapse sidebar, set body class
document.getElementById('chat-fab').style.display = 'none';
document.body.classList.add('on-assistant');
if (!sidebarCollapsed) { toggleSidebar(); autoCollapsedSidebar = true; }

// Close floating mini assistant when clicking outside it (overlay approach)
const chatOverlay = document.createElement('div');
chatOverlay.id = 'chat-overlay';
chatOverlay.style.cssText = 'display:none;position:fixed;inset:0;z-index:399;';
chatOverlay.addEventListener('click', function() {
  chatOpen = false;
  document.getElementById('chat-panel').classList.remove('open');
  chatOverlay.style.display = 'none';
});
document.body.appendChild(chatOverlay);

// Restore session if still active (survives page refresh within same tab session)
const savedSession = sessionStorage.getItem('techops_user');
if (savedSession) {
  try {
    currentUser = JSON.parse(savedSession);
    applySession(currentUser);
  } catch(e) {
    sessionStorage.removeItem('techops_user');
  }
}