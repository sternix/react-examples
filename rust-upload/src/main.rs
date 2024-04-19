use actix_cors::Cors;
use actix_multipart::Multipart;
use actix_web::{web, App, Error, HttpResponse, HttpServer, Responder};
use futures::{StreamExt, TryStreamExt};
use tokio::io::AsyncWriteExt;

async fn index() -> impl Responder {
    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body("Merhaba Dünya")
}


// curl -F 'resim=@a.jpg' http://localhost:3001/upload
// curl -F 'resim=@/full/path/a.jpg' http://localhost:3001/upload

async fn upload(mut payload: Multipart) -> Result<HttpResponse, Error> {
    if let Ok(Some(mut field)) = payload.try_next().await {
    // println!("{}",field.content_disposition().get_name().unwrap());
    // form'daki adı
        let filename = field.content_disposition().get_filename().unwrap();

        let mut f = tokio::fs::File::create(format!("./tmp/{}", filename)).await?;

        while let Some(chunk) = field.next().await {
            let data = chunk.unwrap();
            f.write_all(&data).await.unwrap();
        }
    }

    Ok(HttpResponse::Ok().into())
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));
    log::info!("Starting HTTP server at http://localhost:3001");

    HttpServer::new(move || {
        App::new()
            .wrap(Cors::permissive())
            .service(actix_files::Files::new("/public", "public").show_files_listing())
            .service(actix_files::Files::new("/static", "public/static").show_files_listing())
            .route("/", web::get().to(index))
            .route("/upload", web::post().to(upload))
    })
    .bind("0.0.0.0:3001")?
    .run()
    .await
}
