"use client";
import { format } from "date-fns";
import { Heart, Send, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { TJourney } from "@/types/journey.models";

import styles from "./JourneyCard.module.css";

type JourneyCardProps = {
  data: TJourney;
};

const JourneyCard: React.FC<JourneyCardProps> = ({
  data: {
    country,
    city,
    tags,
    rating,
    hotelName,
    stars,
    features,
    departureDate,
    nights,
    price,
    flightFrom,
    likes,
    shareLabel,
    guests,
    image,
    allInclusive,
  },
}) => {
  return (
    <Card className={cn(styles.root, "w-full mx-auto")}>
      <CardHeader
        className="p-0 rounded-t-lg min-h-[210px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="p-4">
          <div className="bg-[#0FA5FF] w-fit px-2 py-1.5 rounded-md">
            <p className="font-black text-white text-lg">
              {country}, {city}
            </p>
          </div>
          <div className="mt-2">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="w-fit px-2 py-1 first:rounded-tl-md last:rounded-bl-md rounded-r-md"
                style={{ backgroundColor: tag.color }}
              >
                <p className="text-white font-bold text-xxs">{tag.label}</p>
              </div>
            ))}
          </div>
        </div>

        {!!rating.score && !!rating.reviews && (
          <div className="bg-muted w-fit mt-auto mb-0 h-fit mx-auto rounded-t-xl px-4 py-2 flex items-center gap-2 justify-center">
            {!!rating.score && (
              <p className="text-sm font-bold text-success">
                {rating.score} Superb
              </p>
            )}
            {!!rating.reviews && (
              <p className="text-sm text-gray">{rating.reviews} reviews</p>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 flex flex-col justify-between gap-4 min-h-48">
        <div>
          <CardTitle>{hotelName}</CardTitle>
          <div className="flex items-center">
            {Array.from({ length: stars }, (_, i) => (
              <Star
                size={14}
                key={i}
                className="text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>
        </div>

        <ul
          className={cn("text-xs grid grid-rows-auto", {
            "grid-cols-2": features.length > 2,
          })}
        >
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>

        <div className="flex justify-between">
          <div className="text-sm border-l-[3px] border-haze border-solid pl-2">
            <p
              suppressHydrationWarning
              className="font-medium"
            >{`${format(departureDate, "yyyy-mm-dd")}, - ${nights} nights`}</p>
            <p
              className={cn("font-medium", {
                "text-success": allInclusive,
              })}
            >
              {allInclusive ? "Viskas iskaiciuota" : "Maitinimas programa"}
            </p>
            <p className="text-card-foreground/60">{flightFrom}</p>
          </div>

          <div className="flex flex-col justify-end items-end">
            <div className="bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5 rounded w-fit">
              <p className="text-xxs font-bold">
                -{price.discount} {price.currency}
              </p>
            </div>

            <p className="text-destructive font-bold text-2xl">
              {price.current} {price.currency}
            </p>
            <div className="text-muted-foreground text-xxs line-through">
              {price.regular} {price.currency}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 mt-auto pt-0 flex justify-between items-end text-xxs">
        <div className="flex justify-between gap-3 items-center">
          <div className="flex w-fit items-center gap-1 text-destructive font-medium">
            <Heart size={14} />
            <span>{likes}</span>
          </div>
          <Link
            href="/"
            className="text-xxs flex items-center w-fit underline text-primary font-medium"
          >
            <Send size={14} className="text-primary mr-1" />
            {shareLabel}
          </Link>
        </div>
        <div className="text-xxs text-muted-foreground">Guests: {guests}</div>
      </CardFooter>
    </Card>
  );
};

const JourneyCardSkeleton = () => {
  return <Skeleton className="w-full rounded-lg h-[434px]" />;
};

export { JourneyCard, JourneyCardSkeleton };
