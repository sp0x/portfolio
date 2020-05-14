FROM gatsbyjs/gatsby:onbuild as build
#We'll build the site here


FROM gatsbyjs/gatsby
COPY --from=build /app/public /pub