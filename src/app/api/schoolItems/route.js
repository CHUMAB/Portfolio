import { NextResponse } from 'next/server';
import axios from 'axios';
//export const dynamic = "force-dynamic"

export async function POST(req) {

    const { schoolConnection } = await req.json();

    if (schoolConnection) {                    
        const schoolData = [];
        const fetchData = [];
        try {
            fetchData = await axios.get('https://aylfxdea9iuc4d4g.public.blob.vercel-storage.com/schoolArray.json');
        }
        catch(e) {
            console.log(e)
        }
        
        let data = fetchData.data;

        schoolData.push( data )
        return NextResponse.json(schoolData);
    }
    return NextResponse.json(schoolData);
}

