.PHONY: psql
psql:
	docker stop sesame-postgres || true
	docker rm sesame-postgres || true
	docker run \
		--name sesame-postgres \
		-e POSTGRES_PASSWORD=mysecretpassword \
		-e POSTGRES_USER=sesame \
		-p 5432:5432 \
		--restart always \
		-d postgres
