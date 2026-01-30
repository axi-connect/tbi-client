import { NextResponse } from 'next/server';

const PLAYLIST_ID = '3JPZgfUUAM51ejYi7Ayt0h';

async function getAccessToken() {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(
                `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            ).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
    });

    if (!res.ok) {
        const errorBody = await res.text();
        console.error('Failed to get access token', res.status, errorBody);
        throw new Error('Failed to get access token');
    }

    return res.json();
}

export async function GET() {
    try {
        if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
            console.error('Missing Spotify credentials');
            return NextResponse.json(
                { error: 'Missing Server Configuration' },
                { status: 500 }
            );
        }

        const { access_token } = await getAccessToken();

        const playlistRes = await fetch(
            `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}`,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );

        if (!playlistRes.ok) {
            console.error('Failed to fetch playlist', playlistRes.status);
            return NextResponse.json(
                { error: 'Failed to fetch playlist' },
                { status: playlistRes.status }
            );
        }

        const data = await playlistRes.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error('Spotify API Route Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
