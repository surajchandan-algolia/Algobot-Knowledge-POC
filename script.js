function initEmbeddedMessaging() {
  try {
    embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

    embeddedservice_bootstrap.init(
      '00DVG000006Vm89',
      'Algobot_Knowledge_POC',
      'https://algolia--arrakis.sandbox.my.site.com/ESWAlgobotKnowledgePOC1787814769414',
      {
        scrt2URL: 'https://algolia--arrakis.sandbox.my.salesforce-scrt.com'
      }
    );
  } catch (err) {
    console.error('Error loading Embedded Messaging: ', err);
  }
};
