import { NextResponse } from 'next/server';
import axios from 'axios';
//export const dynamic = "force-dynamic"

export async function POST(req) {

    const { schoolConnection } = await req.json();

    if (schoolConnection) {                    
        const schoolData = [];
        let data = [];
        try {
            const fetchData = await axios.get('https://aylfxdea9iuc4d4g.public.blob.vercel-storage.com/schoolArray.json');
            data = fetchData.data;
        }
        catch(e) {
            console.log(e)
        }
        
        

        schoolData.push( data )
        return NextResponse.json(schoolData);
    }
    return NextResponse.json(schoolData);
}



