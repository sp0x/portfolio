FROM sp0x/gatsby:onbuild as build
#We'll build the site here

ENV API_KEY ""
ENV REPOSITORY ""

FROM sp0x/gatsby
COPY --from=build /app/public /pub
