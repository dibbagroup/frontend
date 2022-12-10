gen_widget:
	sh ./gen_widget.sh

gen_page:
	sh ./gen_page.sh

gen_service:
	sh ./gen_service.sh

dev:
	npm build_dev
	firebase deploy --only hosting:frontend-costumer-dev

staging:
	npm build_staging
	firebase deploy --only hosting:frontend-costumer-staging

prod:
	npm build_prod
	firebase deploy --only hosting:frontend-costumer