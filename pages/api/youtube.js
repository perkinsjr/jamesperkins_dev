export default async function youtube(_, res) {
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels/?id=${CHANNEL_ID}&part=statistics&key=${API_KEY}`
    );
    const results = await response.json();
    const channel = results.items[0];
    const { subscriberCount, viewCount } = channel.statistics;
    res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

    return res.status(200).json({
        subscriberCount,
        viewCount
    });
}
