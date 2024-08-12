"use client";
import Image from "next/image";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
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
import React, { useEffect, useState } from "react";

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
    url: "https://minio.tjro.jus.br/dev-cejusc/2024/05/30/Cafe%CC%81%20com%20Inovac%CC%A7a%CC%83o%20-%20Melhore%20sua%20vida%20com%20criatividade%20e%20inovac%CC%A7a%CC%83o.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=LUTEVNN0EWDNRQB4A3TU%2F20240812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240812T115846Z&X-Amz-Expires=43198&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJMVVRFVk5OMEVXRE5SUUI0QTNUVSIsImF0X2hhc2giOiJNV1ZNcHl4UTE4RmNtdlRpZ2hObVBBIiwiYXVkIjoibWluaW8iLCJhdXRoX3RpbWUiOjE3MjI2MTQ1NTksImF6cCI6Im1pbmlvIiwiZW1haWwiOiJnaW92YW5pZmVybmFuZGVzQHRqcm8uanVzLmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV4cCI6MTcyMzQ2NzUxNSwiZmFtaWx5X25hbWUiOiJGZXJuYW5kZXMgZG9zIFNhbnRvcyBPbGl2ZWlyYSIsImdpdmVuX25hbWUiOiJHaW92YW5pIEZlcm5hbmRlcyBkb3MgU2FudG9zIE9saXZlaXJhIiwiaWF0IjoxNzIzNDYzOTE2LCJpc3MiOiJodHRwczovL3Nzby50anJvLmp1cy5ici9hdXRoL3JlYWxtcy9QSlJPIiwianRpIjoiMzhhMzA0ZDQtZjUxMS00NWVkLTljYTEtZDNiM2NmNDc1MzQxIiwibmFtZSI6Ikdpb3ZhbmkgRmVybmFuZGVzIGRvcyBTYW50b3MgT2xpdmVpcmEgRmVybmFuZGVzIGRvcyBTYW50b3MgT2xpdmVpcmEiLCJwb2xpY3kiOiJjb25zb2xlRGV2IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTAwMTY0Iiwic2Vzc2lvbl9zdGF0ZSI6IjVlZDk0MjEwLTU4NGQtNDkwMC1hYzZlLThlYjkzZTQ5YjIxYyIsInNpZCI6IjVlZDk0MjEwLTU4NGQtNDkwMC1hYzZlLThlYjkzZTQ5YjIxYyIsInN1YiI6IjhkZDNkMWZlLTI3NDUtNDNjNC1hYjAzLWFkOWI1ZDc2ODMzNyIsInR5cCI6IklEIn0.7YR8aid2_tVPwwxVcp1Djmb6Whyd366SspEGGay8sPu25EbNAXkXuL1yFHFBjFHqOWANGdAAUOJISANmdWUPkQ&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=43c9154faba6d6104f1ad739a6281aea0dc42908cdd353224b6f96e3c61cd920",
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
            <MediaPlayer
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
              </CardHeader>
              <ScrollArea className="h-[250px] text-justify">
                <CardContent>
                  <p className="font-bold">Transcrição do vídeo</p>
                   <p>Plantei uma roseira O vento no cume bate A rosa no cume cheira, Quando vem a chuva fina Salpicos no cume caem Formigas no cume entram, Abelhas do cume saem Quando cai a chuva grossa A água do cume desce O barro do cume escorre O mato no cume cresce Então, quando cessa a chuva No cume volta a alegria Pois torna a brilhar de novo O Sol que no cume ardia No alto daquele cume Plantei uma roseira O vento no cume bate A rosa no cume cheira Quando vem a chuva fina Salpicos no cume caem Formigas no cume entram Abelhas do cume saem Quando cai a chuva grossa A água do cume desce O barro do cume escorre O mato no cume cresce Então, quando cessa a chuva No cume volta a alegria Pois torna a brilhar de novo O Sol que no cume ardia Pois torna a brilhar de novo O Sol que no cume ardia Pois torna a brilhar de novo OSol que no cume ardia</p>
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

    