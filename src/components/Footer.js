import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  if (isMobile) {
    return (
      <div
        style={{
          backgroundColor: "#8B0000",
          color: "white",
          padding: "1em",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "200px",
          }}
        >
          <img width={"100%"} height={"auto"} src="/logo.png" alt="logo" />
        </div>

        <div
          style={{
            textAlign: "left",
          }}
        >
          <h2>Kontakt os</h2>
          <nav>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
              }}
            >
              <li>
                <i class="fa-regular fa-envelope"></i>
                <a
                  style={{
                    color: "white",
                  }}
                  href="mailto:chrnielsen2003@gmail.com"
                >
                  chrnielsen2003@gmail.com
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div style={{ textAlign: "left" }}>
          <p>© {new Date().getFullYear()} - All rights reserved</p>
        </div>

        <div>
          <h2>Spil ansvarligt</h2>
          <p>
            Spil ansvarligt. For yderligere information og hjælp, kontakt
            StopSpillet på telefon 70 22 28 25 eller besøg{" "}
            <a
              style={{
                color: "white",
              }}
              href="https://stopspillet.dk/"
            >
              stopspillet.dk
            </a>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <div
              style={{
                marginTop: "1em",
                maxWidth: "150px",
              }}
            >
              <img
                width={"100%"}
                src="https://casinoven.dk/wp-content/uploads/2023/09/Design-uden-navn-28.png"
                alt=""
              />
            </div>
            <div
              style={{
                marginTop: "1em",
                maxWidth: "150px",
              }}
            >
              <img width={"100%"} src="/img/rofus.webp" alt="" />
            </div>
            <div
              style={{
                marginTop: "1em",
                maxWidth: "150px",
              }}
            >
              <img
                width={"100%"}
                src="https://casinoven.dk/wp-content/uploads/2023/09/Design-uden-navn-29.png"
                alt=""
              />
            </div>
            <div
              style={{
                marginTop: "1em",
                maxWidth: "150px",
              }}
            >
              <img
                width={"100%"}
                src="https://casinoven.dk/wp-content/uploads/2023/09/Design-uden-navn-31.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#8B0000",
        color: "white",
        padding: "1em 5em",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "200px",
          flex: "2",
        }}
      >
        <img width={"100%"} height={"auto"} src="/logo.png" alt="logo" />
      </div>

      <div
        style={{
          flex: "4",
          maxWidth: "400px",
        }}
      >
        <h2>Spil ansvarligt</h2>
        <p>
          Spil ansvarligt. For yderligere information og hjælp, kontakt
          StopSpillet på telefon 70 22 28 25 eller besøg{" "}
          <a
            style={{
              color: "white",
            }}
            href="https://stopspillet.dk/"
          >
            stopspillet.dk
          </a>
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <div
            style={{
              marginTop: "1em",
              maxWidth: "200px",
            }}
          >
            <img
              width={"100%"}
              src="https://casinoven.dk/wp-content/uploads/2023/09/Design-uden-navn-28.png"
              alt=""
            />
          </div>
          <div
            style={{
              marginTop: "1em",
              maxWidth: "200px",
            }}
          >
            <img width={"100%"} src="/img/rofus.webp" alt="" />
          </div>
          <div
            style={{
              marginTop: "1em",
              maxWidth: "200px",
            }}
          >
            <img
              width={"100%"}
              src="https://casinoven.dk/wp-content/uploads/2023/09/Design-uden-navn-29.png"
              alt=""
            />
          </div>
          <div
            style={{
              marginTop: "1em",
              maxWidth: "200px",
            }}
          >
            <img
              width={"100%"}
              src="https://casinoven.dk/wp-content/uploads/2023/09/Design-uden-navn-31.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          flex: "2",
        }}
      >
        <h2>Kontakt os</h2>
        <nav>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
            }}
          >
            <li>
              <i class="fa-regular fa-envelope"></i>
              <a
                style={{
                  color: "white",
                }}
                href="mailto:chrnielsen2003@gmail.com"
              >
                chrnielsen2003@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div style={{ textAlign: "right", flex: "1" }}>
        <p>© {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </div>
  );
}
