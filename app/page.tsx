"use client";

import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardBody, CardFooter, CardHeader } from "./components/ui/card";
import Chip from "./components/ui/chip";
import { Input } from "./components/ui/input";
import { useState } from "react";
import { CheckIcon } from "./components/icons/check-icon";
import { Avatar, AvatarGroup } from "./components/ui/avatar";

const words = ["folk", "furr", "blow", "true", "wind"]
export default function Home() {

  const [wordData, setWordData] = useState(words)

  const handleWord = (delWord: string) => {
    setWordData(wordData.filter(word => word !== delWord));
    if (wordData.length === 1) {
      setWordData(words)
    }
  }

  return (
    <div className="m-10">

      <AvatarGroup>
        <Avatar isBordered size="md" src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
        <Avatar isBordered size="md" src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
        <Avatar isBordered size="md" src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
      </AvatarGroup>
      
      <div className="h-5"/>

      <Input label="Name" labelPlacement="inside"/>

      <div className="mt-10">
        <Card>
          <CardHeader>
            <h1 className="text-3xl">Heading</h1>
          </CardHeader>
          <CardBody>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              vel animi sed minima dicta, reiciendis laborum voluptates deleniti
              harum a explicabo suscipit, ullam, aliquam ipsum culpa magnam
              repudiandae? Magni, dolore.
            </p>
          </CardBody>
          <CardFooter>
            <Button radius="none" variant="" isDisabled={false} color="blue">
              Get Up
            </Button>
          </CardFooter>
        </Card>
        <div className="h-5"/>
        
        {wordData.map((word, index) => (
          <Chip key={index} color="blue" onClose={() => handleWord(word)}>
            {word} 
          </Chip>
        ))}

        <div className="h-5"/>

        <Chip startIcon={<CheckIcon />} color="blue">
          Forever
        </Chip>

        <div className="h-5"/>

        <Chip endIcon={<CheckIcon />} color="blue">Still</Chip>
      </div>
    </div>
  );
}
