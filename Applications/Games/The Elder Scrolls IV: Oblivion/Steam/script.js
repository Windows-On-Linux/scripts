include(["Engines", "Wine", "QuickScript", "SteamScript"]);

new SteamScript()
    .name("The Elder Scrolls IV: Oblivion")
    .editor("Bethesda Game Studios")
    .author("ImperatorS79")
    .wineVersion(LATEST_STAGING_VERSION)
    .wineDistribution("staging")
    .appId(22330)
    .go();
