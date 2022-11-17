import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import '../components/styles/style.css';

function TwitterTimeline () {
  return (
    <div className="twitterTimeline">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="gigazine"
        options={{ height: 400 }}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="nikkei"
        options={{ height: 400 }}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="kyodo_official"
        options={{ height: 400 }}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="sak_07_"
        options={{ height: 400 }}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="YahooNewsTopics"
        options={{ height: 400 }}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="NetflixJP"
        options={{ height: 400 }}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="zoknd"
        options={{ height: 400 }}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="TechCrunch"
        options={{ height: 400 }}
      />
　　　　<TwitterTimelineEmbed
        sourceType="profile"
        screenName="livedoornews"
        options={{ height: 400 }}
      />
    </div>
  );
}

export default TwitterTimeline;
