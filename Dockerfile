FROM sp0x/gatsby:onbuild as build
#We'll build the site here


FROM sp0x/gatsby
COPY --from=build /app/public /pub
