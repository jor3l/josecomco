/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import striptags from "striptags";

export default function Type({ speed, delay, onComplete = null, children }) {
  const [typed, setTyped] = useState([]);
  const lineRef = useRef(null); //useCallback((node) => setLine(node), []);

  const typeString = async () => {
    const line = lineRef.current;
    if (!line) return;

    const str = line.textContent;
    line.textContent = "";
    line.style.display = "block";
    let cleanStr = striptags(str);

    for (const letter of cleanStr) {
      await new Promise((resolve, reject) => {
        if (line) {
          line.textContent += letter;
          setTimeout(() => {
            resolve();
          }, speed || 10);
        }
      });
    }

    typeLine(); // next one
  };

  const typeLine = (_) => {
    console.log(children.length, typed.length);
    if (children.length > typed.length) {
      let line = children[typed.length];
      const clone = React.cloneElement(line, {
        ref: lineRef,
        key: Math.random() * 1000,
        style: {
          display: "none",
        },
      });

      setTyped([
        ...typed.map((e) =>
          React.cloneElement(e, {
            ref: null,
            style: {
              display: "block",
            },
          })
        ),
        clone,
      ]);
    } else if(onComplete) { onComplete(); }
  };

  useEffect(() => {
    setTimeout(() => {
      typeLine();
    }, delay);
  }, []);

  useEffect(async () => {
    await typeString();
  }, [typed.length]);

  return <div key={Math.random() * 1000}>{typed}</div>;
}
