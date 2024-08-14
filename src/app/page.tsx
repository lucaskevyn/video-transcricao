"use client";
import Image from "next/image";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, MediaPlayerInstance } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState, useRef } from "react";


interface Video {
  id: number;
  url: string;
  title: string;
  cardTitle: string;
  cardDescription: string;
  cardContent: string;
}
const videos: Video[] = [
  {
    id: 1,
    url: "https://minio.tjro.jus.br/dev-cejusc/2024/05/30/Cafe%CC%81%20com%20Inovac%CC%A7a%CC%83o%20-%20Melhore%20sua%20vida%20com%20criatividade%20e%20inovac%CC%A7a%CC%83o.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=2A0EDP0DJ54UBFPHQF0O%2F20240814%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240814T153428Z&X-Amz-Expires=43200&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiIyQTBFRFAwREo1NFVCRlBIUUYwTyIsImF0X2hhc2giOiJlbTRVaVZJbW5IOXhNbUNlSDlnVWxnIiwiYXVkIjoibWluaW8iLCJhdXRoX3RpbWUiOjE3MjM2NDAyNjAsImF6cCI6Im1pbmlvIiwiZW1haWwiOiJnaW92YW5pZmVybmFuZGVzQHRqcm8uanVzLmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV4cCI6MTcyMzY1MzI0OCwiZmFtaWx5X25hbWUiOiJGZXJuYW5kZXMgZG9zIFNhbnRvcyBPbGl2ZWlyYSIsImdpdmVuX25hbWUiOiJHaW92YW5pIEZlcm5hbmRlcyBkb3MgU2FudG9zIE9saXZlaXJhIiwiaWF0IjoxNzIzNjQ5NjUwLCJpc3MiOiJodHRwczovL3Nzby50anJvLmp1cy5ici9hdXRoL3JlYWxtcy9QSlJPIiwianRpIjoiNzU5MzEwNzgtMjQyZS00YmI0LWFlYTUtNWFiYzJiMjYwZDkxIiwibmFtZSI6Ikdpb3ZhbmkgRmVybmFuZGVzIGRvcyBTYW50b3MgT2xpdmVpcmEgRmVybmFuZGVzIGRvcyBTYW50b3MgT2xpdmVpcmEiLCJwb2xpY3kiOiJjb25zb2xlRGV2IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTAwMTY0Iiwic2Vzc2lvbl9zdGF0ZSI6IjViODIzMTA0LTRmYzItNDJlMy04ODYyLTExMTE3MWZhYWNlMSIsInNpZCI6IjViODIzMTA0LTRmYzItNDJlMy04ODYyLTExMTE3MWZhYWNlMSIsInN1YiI6IjhkZDNkMWZlLTI3NDUtNDNjNC1hYjAzLWFkOWI1ZDc2ODMzNyIsInR5cCI6IklEIn0.xRrimxU06GH8Y9opwACSyb857UfXqRYfTpjxb8k9pEqkyGQ3nSq2wzzeWUGcz3pODocB2DdMg0Q4ADIOU2Ob1g&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=be57589ec40817a983a94e12f6b08077a6420d441f52a0230bbc1b59f06ab7be",
    title: "Café com Inovação",
    cardTitle: "Café com Inovação",
    cardDescription: "Tribunal Justiça do Estado de Rondônia",
    cardContent:
      "Plantei uma roseira O vento no cume bate A rosa no cume cheira, Quando vem a chuva fina Salpicos no cume caem Formigas no cume entram, Abelhas do cume saem Quando cai a chuva grossa A água do cume desce O barro do cume escorre O mato no cume cresce Então, quando cessa a chuva No cume volta a alegria Pois torna a brilhar de novo O Sol que no cume ardia No alto daquele cume Plantei uma roseira O vento no cume bate A rosa no cume cheira Quando vem a chuva fina Salpicos no cume caem Formigas no cume entram Abelhas do cume saem Quando cai a chuva grossa A água do cume desce O barro do cume escorre O mato no cume cresce Então, quando cessa a chuva No cume volta a alegria Pois torna a brilhar de novo O Sol que no cume ardia Pois torna a brilhar de novo O Sol que no cume ardia Pois torna a brilhar de novo OSol que no cume ardia",
  },
];

interface HomeProps {
  searchParams?: {
    query?: string;
    page?: number;
  };
}

const Home: React.FC<HomeProps> = ({ searchParams }: HomeProps) => {
  const query = searchParams?.query || "";

  const filteredItems = videos.filter((item) => item.url === query);

    const [isValidUrl, setIsValidUrl] = useState<boolean>(true);


  useEffect(() => {
    const validateUrl = (url: string) => {
      try {
        const parsedUrl = new URL(url);
       
        return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
      } catch (error) {
        return false;
      }
    };

    if (query) {
      setIsValidUrl(validateUrl(query));
    } else {
      setIsValidUrl(false);
    }
  }, [query]);
  
  const mediaPlayerRef = useRef<MediaPlayerInstance | null>(null);

  const jumpToTimestamp = (time: number) => {
    if (mediaPlayerRef.current) {
      mediaPlayerRef.current.currentTime = time;
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center">
             {query === "" ? (
        <div>
          <Image
            src="/tj.png"
            alt="No results"
            width={800}
            height={400}
            className="mt-4"
          />
        </div>
      ) : !isValidUrl ? (
        <div>
          <p>Resultado não encontrado</p>
        </div>
      ) : 
      query !== "" && isValidUrl && (
        <div className="grid lg:grid-cols-2 w-8/12 gap-4 items-stretch">
          <div>
            <MediaPlayer ref = {mediaPlayerRef}
              className="h-full"
              title="Café com Inovação"
              src={query}
            >
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails={query}
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Café com Inovação</CardTitle>
                <CardDescription>
                  Tribunal Justiça do Estado de Rondônia
                </CardDescription>
                <div className="flex gap-3"> <button className="bg-gray-100 border p-1" onClick={() => jumpToTimestamp(90)}> 1:30</button>
                  <button className="bg-gray-100 border p-1" onClick={() => jumpToTimestamp(120)}> 2:00</button>
                  <button className="bg-gray-100 border p-1" onClick={() => jumpToTimestamp(150)}> 2:30</button>
                  </div>
              </CardHeader>
              <ScrollArea className="h-[250px] text-justify">
                <CardContent>
                  <p className="font-bold">Transcrição do vídeo</p>
                  <p>Plantei uma roseira O vento no cume bate A rosa no cume cheira, Quando vem a chuva fina Salpicos no cume caem Formigas no cume entram, Abelhas do cume saem Quando cai a chuva grossa A água do cume desce O barro do cume escorre O mato no cume cresce Então, quando cessa a chuva No cume volta a alegria Pois torna a brilhar de novo O Sol que no cume ardia No alto daquele cume Plantei uma roseira O vento no cume bate A rosa no cume cheira Quando vem a chuva fina Salpicos no cume caem Formigas no cume entram Abelhas do cume saem Quando cai a chuva grossa A água do cume desce O barro do cume escorre O mato no cume cresce Então, quando cessa a chuva No cume volta a alegria Pois torna a brilhar de novo O Sol que no cume ardia Pois torna a brilhar de novo O Sol que no cume ardia Pois torna a brilhar de novo OSol que no cume ardia</p><a href="/">00:25</a>
                  <p>{videos.find((video) => video.url === query)?.cardContent}</p>
                </CardContent>
              </ScrollArea>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

    