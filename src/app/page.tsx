"use client";
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
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
    url: "https://minio.tjro.jus.br/dev-cejusc/2024/05/30/Cafe%CC%81%20com%20Inovac%CC%A7a%CC%83o%20-%20Melhore%20sua%20vida%20com%20criatividade%20e%20inovac%CC%A7a%CC%83o.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=BIOOGTSJP8ZU2XJMDRML%2F20240807%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240807T150427Z&X-Amz-Expires=43200&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJCSU9PR1RTSlA4WlUyWEpNRFJNTCIsImF0X2hhc2giOiIwakN2T2FCQmN6azBuZlR4OXg4YkF3IiwiYXVkIjoibWluaW8iLCJhdXRoX3RpbWUiOjE3MjI2MTQ1NTksImF6cCI6Im1pbmlvIiwiZW1haWwiOiJnaW92YW5pZmVybmFuZGVzQHRqcm8uanVzLmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV4cCI6MTcyMzA0NjY1NSwiZmFtaWx5X25hbWUiOiJGZXJuYW5kZXMgZG9zIFNhbnRvcyBPbGl2ZWlyYSIsImdpdmVuX25hbWUiOiJHaW92YW5pIEZlcm5hbmRlcyBkb3MgU2FudG9zIE9saXZlaXJhIiwiaWF0IjoxNzIzMDQzMDU3LCJpc3MiOiJodHRwczovL3Nzby50anJvLmp1cy5ici9hdXRoL3JlYWxtcy9QSlJPIiwianRpIjoiYzlhZThmZGMtZjhkMS00MzgxLWIyNGMtMTI1NDM5ZmZlMDYwIiwibmFtZSI6Ikdpb3ZhbmkgRmVybmFuZGVzIGRvcyBTYW50b3MgT2xpdmVpcmEgRmVybmFuZGVzIGRvcyBTYW50b3MgT2xpdmVpcmEiLCJwb2xpY3kiOiJjb25zb2xlRGV2IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTAwMTY0Iiwic2Vzc2lvbl9zdGF0ZSI6IjVlZDk0MjEwLTU4NGQtNDkwMC1hYzZlLThlYjkzZTQ5YjIxYyIsInNpZCI6IjVlZDk0MjEwLTU4NGQtNDkwMC1hYzZlLThlYjkzZTQ5YjIxYyIsInN1YiI6IjhkZDNkMWZlLTI3NDUtNDNjNC1hYjAzLWFkOWI1ZDc2ODMzNyIsInR5cCI6IklEIn0.NrSCCVC-Z0JRmMD9PcIor1y-_vDGx6dZI4btgimAvhejXbl_lFl_59kFiuB28KBqLX_4CuxrzjFPzMLOhgTVNg&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=e19879df7994cc3e2beea39116eb67805f410efed1814b33e59bee0fe604bf2d",
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
  // const query = "https://minio.tjro.jus.br/dev-cejusc/2024/05/30/Cafe%CC%81%20com%20Inovac%CC%A7a%CC%83o%20-%20Melhore%20sua%20vida%20com%20criatividade%20e%20inovac%CC%A7a%CC%83o.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=BIOOGTSJP8ZU2XJMDRML%2F20240807%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240807T150427Z&X-Amz-Expires=43200&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJCSU9PR1RTSlA4WlUyWEpNRFJNTCIsImF0X2hhc2giOiIwakN2T2FCQmN6azBuZlR4OXg4YkF3IiwiYXVkIjoibWluaW8iLCJhdXRoX3RpbWUiOjE3MjI2MTQ1NTksImF6cCI6Im1pbmlvIiwiZW1haWwiOiJnaW92YW5pZmVybmFuZGVzQHRqcm8uanVzLmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV4cCI6MTcyMzA0NjY1NSwiZmFtaWx5X25hbWUiOiJGZXJuYW5kZXMgZG9zIFNhbnRvcyBPbGl2ZWlyYSIsImdpdmVuX25hbWUiOiJHaW92YW5pIEZlcm5hbmRlcyBkb3MgU2FudG9zIE9saXZlaXJhIiwiaWF0IjoxNzIzMDQzMDU3LCJpc3MiOiJodHRwczovL3Nzby50anJvLmp1cy5ici9hdXRoL3JlYWxtcy9QSlJPIiwianRpIjoiYzlhZThmZGMtZjhkMS00MzgxLWIyNGMtMTI1NDM5ZmZlMDYwIiwibmFtZSI6Ikdpb3ZhbmkgRmVybmFuZGVzIGRvcyBTYW50b3MgT2xpdmVpcmEgRmVybmFuZGVzIGRvcyBTYW50b3MgT2xpdmVpcmEiLCJwb2xpY3kiOiJjb25zb2xlRGV2IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTAwMTY0Iiwic2Vzc2lvbl9zdGF0ZSI6IjVlZDk0MjEwLTU4NGQtNDkwMC1hYzZlLThlYjkzZTQ5YjIxYyIsInNpZCI6IjVlZDk0MjEwLTU4NGQtNDkwMC1hYzZlLThlYjkzZTQ5YjIxYyIsInN1YiI6IjhkZDNkMWZlLTI3NDUtNDNjNC1hYjAzLWFkOWI1ZDc2ODMzNyIsInR5cCI6IklEIn0.NrSCCVC-Z0JRmMD9PcIor1y-_vDGx6dZI4btgimAvhejXbl_lFl_59kFiuB28KBqLX_4CuxrzjFPzMLOhgTVNg&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=e19879df7994cc3e2beea39116eb67805f410efed1814b33e59bee0fe604bf2d";
  const [filterUrl, setFilterUrl] = React.useState<string>(query);
  const filteredItems = videos.filter((item) => item.url === query);

  return (
    <div className="flex flex-1 items-center justify-center">
      {filteredItems.length === 0 && (<p>Resultado não  encontrado.</p>) }
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="grid lg:grid-cols-2 w-8/12 gap-4 items-stretch">
          <div>
            <MediaPlayer
              className="h-full"
              title="Café com Inovação"
              src={item.url}
            >
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails={item.url}
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>{item.cardTitle}</CardTitle>
                <CardDescription>{item.cardDescription}</CardDescription>
              </CardHeader>
              <ScrollArea className="h-[250px] test-justify">
                <CardContent>
                  <p className="font-bold ">Transcrição do vídeo</p>
                  <p>{item.cardContent}</p>
                </CardContent>
              </ScrollArea>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
